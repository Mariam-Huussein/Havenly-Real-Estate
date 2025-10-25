import axiosClient from "./axiosClient";

export const login = (data) => axiosClient.post("/Auth/login", data);
export const register = (data) => axiosClient.post("/Auth/register", data);
export const registerAsAgency = (data) => axiosClient.post("/Auth/registerAsAgency", data);
export const changePassword = (data) => axiosClient.post("/Auth/change-password", data);
export const forgotPassword = (data) => axiosClient.post("/Auth/forgot-password", data);
export const resetPassword = (data) => axiosClient.post("/Auth/reset-password", data);
export const resendOtp = (data) => axiosClient.post("/Auth/resend-otp", data);
export const getUserById = (id) => axiosClient.get(`/Auth/${id}`);