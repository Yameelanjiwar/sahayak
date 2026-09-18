import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Services from "./pages/services";
import Workers from "./pages/workers";
import Profile from "./pages/profile";
import Booking from "./pages/booking";
import Confirmation from "./pages/confirmation";
import Bookings from "./pages/bookings";
import Payment from "./pages/payment";
import Review from "./pages/review";
import Login from "./pages/Login";
import ClientLogin from "./pages/Client-Login";
import WorkerLogin from "./pages/worker-login";
import ClientDashboard from "./pages/client-dashboard";
import WorkerRegister from "./pages/worker-register";
import WorkerDashboard from "./pages/worker-dashboard";
import AdminDashboard from "./pages/admin-dashboard";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
      ```
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/review" element={<Review />} />

        <Route path="/login" element={<Login />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/worker-login" element={<WorkerLogin />} />

        <Route path="/worker-register" element={<WorkerRegister />} />
        <Route path="/worker-dashboard" element={<WorkerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
