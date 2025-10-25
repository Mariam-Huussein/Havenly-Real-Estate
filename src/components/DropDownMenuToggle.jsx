import { LogOutIcon } from "lucide-react";
import { useAuth } from "./../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DropDownMenuToggle = () => {
  const { userRoles, logout } = useAuth();
  const navigate = useNavigate();

  const isAgency = Array.isArray(userRoles)
    ? userRoles.includes("Agency")
    : userRoles === "Agency";
  return (
    <div
      className="absolute right-0 top-12 w-52 rounded-md border border-gray-100 bg-white shadow-lg"
      role="menu"
    >
      <div className="p-2">
        <button
          onClick={() => navigate(isAgency ? "/owner" : "/my-bookings")}
          className="block w-full text-left rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {isAgency ? "Dashboard" : "My Bookings"}
        </button>

        <hr className="my-1" />

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <LogOutIcon fontSize="small" /> Logout
        </button>
      </div>
    </div>
  );
};

export default DropDownMenuToggle;
