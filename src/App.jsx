import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Listing from "./pages/Listing";
import PropertyDetails from "./pages/PropertyDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyBooking from "./pages/MyBooking";
import NotFoundPage from "./components/NotFoundPage";
// import MyBooking from "./pages/MyBooking";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<PropertyDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<MyBooking />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </main>
  );
}

export default App;
