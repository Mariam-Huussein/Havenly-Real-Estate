import {
  login,
  register,
  forgotPassword,
  resetPassword,
} from "../services/authService";
import { toast } from "react-toastify";

export const handleLogin = async (
  formData,
  setLoading,
  setError,
  onClose,
  setUser,
  setToken
) => {
  setLoading(true);
  setError("");

  try {
    const res = await login({
      email: formData.email,
      password: formData.password,
    });


    console.log("Login Response:", res);

    const { token, userId, userName } = res.data.data;

    if (!token) throw new Error("Invalid response from server");

    // نكوّن object user ونخزّنه في الـ context + localStorage
    const user = { id: userId, userName };
    setUser(user);
    setToken(token);

    toast.success("Login successful! 🎉");
    onClose();

  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    const errorMessage =
      err.response?.data?.message || "Invalid email or password";
    setError(errorMessage);
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};

export const handleRegister = async (
  formData,
  setLoading,
  setError,
  setState
) => {
  setLoading(true);
  setError("");
  try {
    await register({
      userName: formData.userName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    });
    toast.success("Account created successfully! You can log in now.");
    setState("login");
  } catch (err) {
    const errorMessage = err.response?.data?.message || "Registration failed";
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};

export const handleForgotPassword = async (
  formData,
  setLoading,
  setError,
  setOtpSent
) => {
  if (!formData.email) return setError("Please enter your email");
  setLoading(true);
  setError("");
  try {
    await forgotPassword({ email: formData.email });
    setOtpSent(true);
    toast.success("OTP sent to your email.");
  } catch (err) {
    const errorMessage = err.response?.data?.message || "Email not found";
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};

export const handleResetPassword = async (
  formData,
  setLoading,
  setError,
  setOtpSent,
  setState
) => {
  if (!formData.otp || !formData.password)
    return setError("Please enter OTP and new password");
  setLoading(true);
  setError("");
  try {
    await resetPassword({
      email: formData.email,
      otp: formData.otp,
      newPassword: formData.password,
    });
    toast.success("Password reset successful! You can log in now.");
    setOtpSent(false);
    setState("login");
  } catch (err) {
    const errorMessage =
      err.response?.data?.message || "Invalid OTP or request";
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};

export const handleLogout = (onLogoutCallback) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  toast.info("You have been logged out.");

  if (onLogoutCallback) onLogoutCallback();
};
