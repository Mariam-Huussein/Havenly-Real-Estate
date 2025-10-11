import React, { useEffect, useState } from "react";
import { dummyBookingsData } from "../../data";
import { useAuth } from "../context/AuthContext";
import BookingCard from "../components/BookingCard";
import Grid from "@mui/material/Grid";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  const getUserBooking = () => {
    setBookings(dummyBookingsData);
  };

  useEffect(() => {
    if (true) {
      getUserBooking();
    }
  }, [user]);

  return (
    <section className="max-padd-container py-16 pt-28">
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        className="justify-center"
      >
        {bookings?.map((booking) => (
          <Grid key={booking.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <div className="h-full flex justify-center">
              <BookingCard booking={booking} />
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default MyBooking;
