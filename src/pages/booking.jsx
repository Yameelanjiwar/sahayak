import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";

function Booking() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const emergency = params.get("emergency") === "true";

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const submit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <main className="page narrow-page">
      <button className="back-button" onClick={() => navigate("/profile")}>
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="form-header">
        <p className="section-label">
          {emergency ? "EMERGENCY BOOKING" : "BOOK A SERVICE"}
        </p>

        <h1>{emergency ? "Get urgent help" : "Schedule your service"}</h1>

        <p>Book Ramesh Kumar for electrical service.</p>
      </div>

      <form className="booking-form" onSubmit={submit}>
        <div className="booking-worker">
          <div className="avatar">RK</div>

          <div>
            <strong>Ramesh Kumar</strong>
            <span>Professional Electrician · ⭐ 4.8</span>
          </div>

          <ShieldCheck size={21} />
        </div>

        <label>
          Service
          <select defaultValue="Electrician">
            <option>Electrician</option>
            <option>Plumber</option>
            <option>Carpenter</option>
            <option>Painter</option>
            <option>Cleaning</option>
            <option>Gardener</option>
          </select>
        </label>

        <div className="two-fields">
          <label>
            <span>Date</span>

            <div className="input-icon">
              <CalendarDays size={17} />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </label>

          <label>
            <span>Time</span>

            <div className="input-icon">
              <Clock3 size={17} />

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </label>
        </div>

        <label>
          Service address
          <div className="input-icon">
            <MapPin size={17} />

            <input
              placeholder="Enter your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </label>

        <label>
          Additional details
          <textarea
            placeholder="Describe the work you need..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="4"
          />
        </label>

        <div className="price-summary">
          <div>
            <span>Service charge</span>
            <strong>₹299</strong>
          </div>

          <div>
            <span>Platform fee</span>
            <strong>₹20</strong>
          </div>

          <div className="total">
            <span>Total</span>
            <strong>₹319</strong>
          </div>
        </div>

        <button className="primary-btn full" type="submit">
          Continue to Payment
        </button>
      </form>
    </main>
  );
}

export default Booking;
