import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  CalendarDays,
  MapPin,
  ArrowRight,
  Home,
} from "lucide-react";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <main className="page confirmation-page">
      <div className="success-icon">
        <CheckCircle2 size={54} />
      </div>

      <p className="section-label">BOOKING CONFIRMED</p>

      <h1>Your service is booked!</h1>

      <p className="confirmation-sub">
        Ramesh Kumar has been notified and your booking is confirmed.
      </p>

      <div className="confirmation-card">
        <div>
          <span>Booking ID</span>
          <strong>SHY-2026-10482</strong>
        </div>

        <div>
          <span>Service</span>
          <strong>Electrician</strong>
        </div>

        <div>
          <span>Date & time</span>
          <strong>
            <CalendarDays size={16} />
            24 September · 10:30 AM
          </strong>
        </div>

        <div>
          <span>Location</span>
          <strong>
            <MapPin size={16} />
            Indore, Madhya Pradesh
          </strong>
        </div>

        <div>
          <span>Amount</span>
          <strong>₹319</strong>
        </div>
      </div>

      <div className="confirmation-actions">
        <button className="primary-btn" onClick={() => navigate("/bookings")}>
          View My Bookings
          <ArrowRight size={18} />
        </button>

        <button className="secondary-btn" onClick={() => navigate("/")}>
          <Home size={17} />
          Back Home
        </button>
      </div>
    </main>
  );
}

export default Confirmation;
