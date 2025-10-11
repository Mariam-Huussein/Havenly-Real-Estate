import React, { useEffect, useState } from "react";
import { dummyBookingsData } from "../../data";
import { useAppContext } from "../context/AppContext";
import BookingCard from "../components/BookingCard";
import Grid from "@mui/material/GridLegacy";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { currency, user } = useAppContext();

  const getUserBooking = () => {
    setBookings(dummyBookingsData);
  };

  useEffect(() => {
    if (true) {
      getUserBooking();
    }
  }, [user]);

  return (
    <>
      <section className="max-padd-container py-16 pt-28">
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          className="justify-center"
        >
          {bookings?.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking.id}>
              <div className="h-full flex">
                <BookingCard booking={booking} />
              </div>
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default MyBooking;
