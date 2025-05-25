import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function UserLayout() {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">
      <Header />
      <main className="flex-grow w-full  mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-md">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
