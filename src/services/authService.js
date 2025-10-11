import axiosClient from "./axiosClient";

export const login = (data) => axiosClient.post("/Auth/login", data);
export const register = (data) => axiosClient.post("/Auth/register", data);
export const forgotPassword = (data) => axiosClient.post("/Auth/forgot-password", data);
export const resetPassword = (data) => axiosClient.post("/Auth/reset-password", data);