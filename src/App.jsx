import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import PropertyDetails from "./pages/PropertyDetails";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import MyBooking from "./pages/MyBooking";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/Agency/Dashboard";
import AddProperty from "./pages/Agency/AddProperty";
import ListProperty from "./pages/Agency/ListProperty";
import Owner from "./pages/Owner";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";

function App() {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");
  return (
    <main>
      <Toaster
        position="top-center"
        autoClose={4000}
        reverseOrder={false}
      />
      {!isOwnerPath && <Header />}
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<PropertyDetails />} />
        <Route path="/Auth/:type" element={<AuthPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute allowedRoles={["User"]}>
              <MyBooking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner"
          element={
            <ProtectedRoute allowedRoles={["Agency"]}>
              <Owner />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="list-property" element={<ListProperty />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
