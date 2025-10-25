import { useEffect, useState } from "react";
import { updateBookingStatus } from "../../API/bookingService";
import toast from "react-hot-toast";

const ViewBookingsTable = ({ bookings, agencyId }) => {
  const [localBookings, setLocalBookings] = useState(bookings);

  useEffect(() => {
    setLocalBookings(bookings);
  }, [bookings]);

  const handleStatusChange = async (bookingId, newStatus) => {
    const booking = localBookings.find((b) => b.id === bookingId);
    if (booking?.status === "Rejected") {
      toast.error("Cannot change status once it's Rejected.");
      return;
    }

    try {
      await updateBookingStatus(bookingId, newStatus, agencyId);

      setLocalBookings((prev) =>
        prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
      );

      toast.success("Status updated successfully!");
    } catch (error) {
      console.error("Error updating booking status:", error);
      toast.error("Failed to update booking status.");
    }
  };

  return (
    <div className="hidden md:block">
      <table className="min-w-full text-sm text-gray-700 border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-secondary text-white text-left">
            <th className="px-4 py-3 rounded-l-lg">#</th>
            <th className="px-4 py-3">Property</th>
            <th className="px-4 py-3">Booking Dates</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3 rounded-r-lg">Status</th>
          </tr>
        </thead>
        <tbody>
          {localBookings.map((booking, index) => (
            <tr
              key={index}
              className="bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200 rounded-lg"
            >
              <td className="px-4 py-3 font-medium">{index + 1}</td>

              <td className="px-4 py-3 flex items-center gap-3">
                <img
                  src={booking.defaultImage}
                  alt={booking.realEstateTitle}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <span className="line-clamp-2">{booking.realEstateTitle}</span>
              </td>

              <td className="px-4 py-3">
                {new Date(booking.startDate).toLocaleDateString()} –{" "}
                {new Date(booking.endDate).toLocaleDateString()}
              </td>

              <td className="px-4 py-3">${booking.totalPrice}</td>

              <td className="px-4 py-3">
                <select
                  value={booking.status}
                  onChange={(e) =>
                    handleStatusChange(booking.id, e.target.value)
                  }
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookingsTable;
