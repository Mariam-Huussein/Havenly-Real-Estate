import { useEffect, useState } from "react";
import { updateBookingStatus } from "../../API/bookingService";
import toast from "react-hot-toast";

const ViewBookingsCard = ({ bookings, agencyId }) => {
  const [localBookings, setLocalBookings] = useState(bookings);

  useEffect(() => {
    setLocalBookings(bookings);
  }, [bookings]);

  const handleStatusChange = async (bookingId, newStatus) => {
    setLocalBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );

    try {
      await updateBookingStatus(bookingId, newStatus, agencyId);
      toast.success("Status updated successfully!");
    } catch (error) {
      console.error("Error updating booking status:", error);
      toast.error("Failed to update booking status.");

      setLocalBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId
            ? { ...b, status: bookings.find((x) => x.id === bookingId)?.status }
            : b
        )
      );
    }
  };
  return (
    <div className="md:hidden flex flex-col gap-4">
      {localBookings.map((booking, index) => (
        <div
          key={index}
          className="bg-secondary/10 rounded-lg shadow p-4 flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <img
              src={booking.defaultImage}
              alt={booking.realEstateTitle}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {booking.realEstateTitle}
              </h3>
              <p className="text-gray-500 text-sm">
                {new Date(booking.startDate).toLocaleDateString()} –{" "}
                {new Date(booking.endDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">
              ${booking.totalPrice}
            </span>
            <select
              value={booking.status}
              onChange={(e) => handleStatusChange(booking.id, e.target.value)}
              className={`px-2 py-1 text-xs rounded-md border outline-none cursor-pointer
                              ${
                                booking.status === "Confirmed" ||
                                booking.status === "Completed"
                                  ? "bg-green-100 text-green-700 border-green-300"
                                  : booking.status === "Rejected" ||
                                    booking.status === "Cancelled"
                                  ? "bg-red-100 text-red-600 border-red-300"
                                  : "bg-orange-100 text-orange-600 border-orange-300"
                              }
                                 focus-within:bg-white focus-within:text-slate-950`}
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Rejected">Rejected</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewBookingsCard;
