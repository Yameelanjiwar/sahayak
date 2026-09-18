import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight, Star, Plus } from "lucide-react";

const bookings = [
  {
    id: "SHY-2026-10482",
    service: "Electrician",
    worker: "Ramesh Kumar",
    date: "24 Sep 2026",
    time: "10:30 AM",
    status: "Confirmed",
    amount: "₹319",
    initials: "RK",
  },
  {
    id: "SHY-2026-10117",
    service: "Cleaning",
    worker: "Sunita Verma",
    date: "18 Sep 2026",
    time: "2:00 PM",
    status: "Completed",
    amount: "₹499",
    initials: "SV",
  },
];

function Bookings() {
  const navigate = useNavigate();

  return (
    <main className="page">
      <div className="bookings-title">
        <div>
          <p className="section-label">YOUR ACTIVITY</p>
          <h1>My Bookings</h1>
          <p>Track your upcoming and completed services.</p>
        </div>

        <button className="primary-btn" onClick={() => navigate("/services")}>
          <Plus size={18} />
          New Booking
        </button>
      </div>

      <div className="booking-tabs">
        <button className="active">All</button>
        <button>Upcoming</button>
        <button>Completed</button>
      </div>

      <div className="booking-list">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <div className="booking-card-main">
              <div className="avatar">{booking.initials}</div>

              <div className="booking-info">
                <div className="booking-name">
                  <h2>{booking.service}</h2>

                  <span
                    className={
                      booking.status === "Completed"
                        ? "status completed"
                        : "status"
                    }
                  >
                    {booking.status}
                  </span>
                </div>

                <p>with {booking.worker}</p>

                <div className="booking-meta">
                  <span>
                    <CalendarDays size={15} />
                    {booking.date} · {booking.time}
                  </span>

                  <span>
                    <MapPin size={15} />
                    Indore
                  </span>
                </div>
              </div>

              <strong className="booking-amount">{booking.amount}</strong>
            </div>

            <div className="booking-footer">
              <small>{booking.id}</small>

              {booking.status === "Completed" ? (
                <button onClick={() => navigate("/review")}>
                  Rate service
                  <Star size={15} />
                </button>
              ) : (
                <button
                  onClick={() =>
                    navigate(
                      `/profile?worker=${encodeURIComponent(
                        booking.worker,
                      )}&service=${encodeURIComponent(booking.service)}`,
                    )
                  }
                >
                  View details
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Bookings;
