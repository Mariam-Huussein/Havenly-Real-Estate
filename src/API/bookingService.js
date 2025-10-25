// src/API/bookingService.js
import axiosClient from "./axiosClient";

// إنشاء حجز جديد
export const createBooking = async (bookingData) => {
  return axiosClient.post("/Booking/Create", bookingData);
};

// الحجوزات القادمة للمستخدم
export const getUpcomingBookings = async (userId) => {
  return axiosClient.get(`/Booking/user/upcoming/${userId}`);
};

// سجل الحجوزات (التاريخ)
export const getBookingHistory = async (userId) => {
  return axiosClient.get(`/Booking/user/history/${userId}`);
};

// الحجوزات الخاصة بوكالة معينة
export const getAgencyBookings = async (ownerId, status = "") => {
  return axiosClient.get(`/Booking/agency/${ownerId}`, {
    params: { status },
  });
};

// تحديث حالة الحجز
export const updateBookingStatus = async (bookingId, newStatus, agencyId) => {
  return axiosClient.patch("/Booking/UpdateBookingStatus", null, {
    params: {
      bookingId,
      newStatus,
      agencyId,
    },
  });
};