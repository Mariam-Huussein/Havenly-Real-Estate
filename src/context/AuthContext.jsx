import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getUserById } from "../API/authService";
import { handleLogout } from "../helpers/authHelpers";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // اقرأ القيم المخزنة وقت التحميل
  const savedUser = (() => {
    try {
      const u = localStorage.getItem("user");
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  })();

  const savedToken = localStorage.getItem("token") || "";
  const savedRoles = (() => {
    try {
      const r = localStorage.getItem("userRoles");
      return r ? JSON.parse(r) : [];
    } catch {
      return [];
    }
  })();

  const [user, setUser] = useState(savedUser);
  const [token, setToken] = useState(savedToken);
  const [userRoles, setUserRoles] = useState(savedRoles);
  const [loading, setLoading] = useState(false);

  // ✅ حفظ بيانات المستخدم بعد login/register
  const saveAuth = (data) => {
    const {
      token: newToken,
      userId,
      userName,
      userRoles: roles = [],
    } = data;

    console.log("🧠 saveAuth data:", data);

    const formattedUser = { userId, name: userName };
    setToken(newToken || "");
    setUser(formattedUser);
    setUserRoles(Array.isArray(roles) ? roles : []);

    // حفظ البيانات في localStorage
    localStorage.setItem("token", newToken || "");
    localStorage.setItem("user", JSON.stringify(formattedUser));
    localStorage.setItem("userRoles", JSON.stringify(roles));
  };

  // ✅ تسجيل خروج
  const logout = () => {
    setUser(null);
    setToken("");
    setUserRoles([]);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userRoles");
    handleLogout();
  };

  // ✅ جلب بيانات المستخدم من السيرفر
  const fetchUser = useCallback(async () => {
    if (!token || !user?.userId) return;

    try {
      setLoading(true);
      const res = await getUserById(user.userId);
      const serverUser = res?.data || res;

      if (serverUser) {
        setUser(serverUser);
        if (serverUser.userRoles) {
          setUserRoles(serverUser.userRoles);
          localStorage.setItem(
            "userRoles",
            JSON.stringify(serverUser.userRoles)
          );
        }
      }
    } catch (err) {
      console.error("fetchUser error:", err);
      logout();
    } finally {
      setLoading(false);
    }
  }, [token, user]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        userRoles,
        saveAuth,
        logout,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
