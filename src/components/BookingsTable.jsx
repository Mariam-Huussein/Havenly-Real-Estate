// src/components/BookingsTable.jsx
const BookingsTable = ({ bookings, onSelect }) => {
  return (
    <div className="hidden md:block">
      <table className="min-w-full text-sm text-gray-700 border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-secondary text-white text-left">
            <th className="px-4 py-3 rounded-l-lg">#</th>
            <th className="px-4 py-3">Property</th>
            <th className="px-4 py-3">Check-in</th>
            <th className="px-4 py-3">Check-out</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3 rounded-r-lg">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, index) => (
            <tr
              key={b.realEstateId}
              className="bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200 cursor-pointer"
              onClick={() => onSelect(b)}
            >
              <td className="px-4 py-3 font-medium">{index + 1}</td>
              <td className="px-4 py-3 flex items-center gap-3">
                <span className="line-clamp-2">{b.realEstateTitle}</span>
              </td>
              <td className="px-4 py-3">{new Date(b.startDate).toDateString()}</td>
              <td className="px-4 py-3">{new Date(b.endDate).toDateString()}</td>
              <td className="px-4 py-3">${b.totalPrice}</td>
              <td className="px-4 py-3">{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;
