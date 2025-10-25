import {
  login,
  register,
  registerAsAgency,
  forgotPassword,
  resetPassword,
} from "../API/authService";

import toast from "react-hot-toast";

export const handleLogin = async (
  formData,
  setLoading,
  setError,
  onClose,
  saveAuth
) => {
  setLoading(true);
  setError("");

  try {
    const res = await login({
      email: formData.email,
      password: formData.password,
    });

    const data = res?.data?.data;
    if (!data?.token) throw new Error("Invalid response from server");

    saveAuth(data);

    toast.success(`Welcome back, ${data.userName}!`);
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

export const handleAgencyRegister = async (formData, setLoading, setError) => {
  setLoading(true);
  setError("");

  try {
    const res = await registerAsAgency({
      agencyName: formData.agencyName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    });

    toast.success("Agency account created successfully! You can log in now.");

    return {
      succeeded: true,
      message: "Agency registered successfully",
      data: res.data,
    };
  } catch (err) {
    const errorMessage =
      err.response?.data?.message || "Agency registration failed";
    setError(errorMessage);
    toast.error(errorMessage);
    return {
      succeeded: false,
      message: errorMessage,
    };
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
  localStorage.removeItem("user");
  localStorage.removeItem("userRoles");
  localStorage.removeItem("token");
  toast.success("You have been logged out.");

  if (onLogoutCallback) onLogoutCallback();
};

export const handleResendOtp = async (formData, setLoading, setError) => {
  if (!formData.email) return setError("Please enter your email");
  setLoading(true);
  setError("");

  try {
    await resendOtp({ email: formData.email.trim() });
    toast.success("A new OTP has been sent to your email.");
  } catch (err) {
    const errorMessage = err.response?.data?.message || "Failed to resend OTP";
    setError(errorMessage);
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};
