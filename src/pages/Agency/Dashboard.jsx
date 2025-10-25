import { useState, useEffect } from "react";
import { getAgencyBookings } from "../../API/bookingService";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import ViewBookingsTable from "../../components/Agency/ViewBookingsTable";
import ViewBookingsCard from "../../components/Agency/ViewBookingsCard";
import { CircularProgress, Typography } from "@mui/material";

const Dashboard = () => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  });

  const getDashboardData = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const res = await getAgencyBookings(userId, statusFilter);
      const bookings = res.data?.data || [];
      const totalBookings = bookings.length;
      const totalRevenue = bookings.reduce(
        (sum, b) => sum + (b.totalPrice || 0),
        0
      );

      setDashboardData({
        bookings,
        totalBookings,
        totalRevenue,
      });
    } catch (err) {
      console.error("Error fetching agency bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, [userId, statusFilter]);

  return (
    <>
      <div className="md:px-8 py-6 xl:py-8 m-1 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-white shadow rounded-xl">
        {/* Top Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flexStart gap-7 p-5 bg-[#fff4d2] lg:min-w-56 rounded-xl">
            <HomeRoundedIcon fontSize="large" />
            <div>
              <h4 className="h4">{dashboardData.totalBookings}</h4>
              <h5 className="h5 text-secondary">Total Sales</h5>
            </div>
          </div>
          <div className="flexStart gap-7 p-5 bg-[#d1e8ff] lg:min-w-56 rounded-xl">
            <PaidRoundedIcon fontSize="large" />
            <div>
              <h4 className="h4">
                ${" "}
                {dashboardData.totalRevenue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </h4>
              <h5 className="h5 text-secondary">Total Earnings</h5>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-4 flex items-center gap-3 mx-auto w-fit">
          <label className="font-medium text-gray-600">Filter by status:</label>
          <select
            className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-yellow-200 outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Rejected">Rejected</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        {/* Latest Bookings */}
        <div className="mt-4">
          {loading ? (
            <div className="flex justify-center py-12">
              <CircularProgress />
            </div>
          ) : dashboardData.bookings.length === 0 ? (
            <Typography color="text.secondary" className="text-center py-6">
              No bookings found.
            </Typography>
          ) : (
            <>
              <ViewBookingsTable bookings={dashboardData.bookings} agencyId={userId} />
              <ViewBookingsCard bookings={dashboardData.bookings}  agencyId={userId}/>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
