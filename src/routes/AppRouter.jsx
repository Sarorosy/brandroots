import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home";
import ScrollToTop from "../components/ScrollToTop";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Route>

      </Routes>
    </Router>
  );
}
