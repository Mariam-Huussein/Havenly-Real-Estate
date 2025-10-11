import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const BookingCard = ({ booking }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Adjust the threshold value to control the tilt effect
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <>
      <Link
        className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer  max-w-sm bg-white"
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        to={`/listing/${booking.property.id}`}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <img
          className="rounded-t-lg w-96 h-56 object-cover object-top"
          src={booking.property.images[0]}
          alt={booking.property.title}
        />
        <div className="p-4">
          <div className="flex">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {booking.property.title}
            </h5>
          </div>
          <div className="mb-3 font-mal text-gray-700">
            <div className="flex items-center gap-x-2">
              <h5 className="medium-14">Propert Type:</h5>
              <p>{booking.property.propertyType}</p>
            </div>
          </div>
          <div className="mb-3 font-mal text-gray-700">
            <div className="flex items-center gap-x-2">
              <h5 className="medium-14">Location:</h5>
              <p>{booking.property.address}</p>
            </div>
          </div>
          <div className="mb-3 font-mal text-gray-700">
            <div className="flex items-center gap-x-2">
              <h5 className="medium-14">Guests:</h5>
              <p>{booking.guests}</p>
            </div>
          </div>
          <div className="mb-3 font-mal text-gray-700">
            <div className="flex items-center gap-x-2">
              <h5 className="medium-14">Total:</h5>
              <p>{booking.totalPrice} $</p>
            </div>
          </div>
          {/* Booking Summary */}
          <div className="mb-3 font-mal text-gray-700">
            <div className="flex items-center gap-x-2">
              <h5 className="medium-14">Booking ID:</h5>
              <p>{booking.id}</p>
            </div>
          </div>
          <div className="mb-3 font-mal text-gray-700">
            <div className="flex items-center gap-x-2">
              <h5 className="medium-14">Check-In:</h5>
              <p className="break-all">
                {" "}
                {new Date(booking.checkInDate).toDateString()}
              </p>
            </div>
          </div>
          <div className="mb-3 font-mal text-gray-700">
            <div className="flex items-center gap-x-2">
              <h5 className="medium-14">Check-Out:</h5>
              <p className="break-all">
                {" "}
                {new Date(booking.checkOutDate).toDateString()}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BookingCard;
