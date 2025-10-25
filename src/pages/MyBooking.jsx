import { useEffect, useState } from "react";
import { getUpcomingBookings, getBookingHistory } from "../API/bookingService";
import { motion, AnimatePresence } from "framer-motion";
import BookingCard from "../components/BookingCard";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import BookingsTable from "../components/BookingsTable";

const MyBooking = () => {
  // const { user } = useAuth();
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [historyBookings, setHistoryBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  // جلب الحجوزات القادمة
  const fetchUpcoming = async () => {
    try {
      setLoading(true);
      const res = await getUpcomingBookings(userId);
      setUpcomingBookings(res.data.data || []);
    } catch (err) {
      console.error("Error fetching upcoming bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  // جلب سجل الحجوزات
  const fetchHistory = async () => {
    try {
      setLoading(true);
      const res = await getBookingHistory(userId);
      setHistoryBookings(res.data.data || []);
    } catch (err) {
      console.error("Error fetching booking history:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUpcoming();
      fetchHistory();
    }
  }, [userId]);


  return (
    <section className="max-padd-container py-16 pt-28">
      <Typography variant="h5" gutterBottom className="mb-8 text-center">
        My Bookings
      </Typography>

      <div className="mb-12">
        <Typography variant="h6" gutterBottom className="mb-3">
          Upcoming Bookings
        </Typography>
        {loading ? (
          <div className="flex justify-center py-8">
            <CircularProgress />
          </div>
        ) : upcomingBookings.length === 0 ? (
          <Typography color="text.secondary" className="text-center py-6">
            No upcoming bookings found.
          </Typography>
        ) : (
          <BookingsTable
            bookings={upcomingBookings}
            onSelect={(b) => setSelectedBooking(b)}
          />
        )}
      </div>

      <div>
        <Typography variant="h6" gutterBottom className="mb-3">
          Booking History
        </Typography>
        {loading ? (
          <div className="flex justify-center py-8">
            <CircularProgress />
          </div>
        ) : historyBookings.length === 0 ? (
          <Typography color="text.secondary" className="text-center py-6">
            No booking history found.
          </Typography>
        ) : (
          <BookingsTable
            bookings={historyBookings}
            onSelect={(b) => setSelectedBooking(b)}
          />
        )}
      </div>

      {/* Popup Card */}
      <AnimatePresence>
        {selectedBooking && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedBooking(null)}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-[90%] max-w-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBooking(null)}
                className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-200 hover:scale-110 z-50"
              >
                ✕
              </button>

              <div className="relative z-40">
                <BookingCard
                  booking={selectedBooking}
                  propertyId={selectedBooking.realEstateId}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyBooking;