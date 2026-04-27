import { useState } from "react";
import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import Bookings from "@/components/clinic/Bookings";
import { toast } from "sonner";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("admin") === "true"
  );
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "Admin@123") {
      localStorage.setItem("admin", "true");
      setIsLoggedIn(true);
    } else {
      toast.error("Wrong password ❌");
    }
  };

  // 🔐 LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-white p-8 rounded-2xl shadow-elegant w-[350px]">
          <h2 className="text-2xl font-serif text-primary mb-4 text-center">
            Admin Login
          </h2>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full border px-4 py-2 rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ✅ DASHBOARD
 return (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />

    <div className="flex-1 container mx-auto px-4 pt-28 pb-12">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-serif text-primary">
          Clinic Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            setIsLoggedIn(false);
          }}
          className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition"
        >
          Logout
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-elegant border border-border/50 p-6">

        <Bookings />
      </div>
    </div>

    <Footer />
  </div>
);
};

export default Admin;