import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  IndianRupee,
  LogOut,
  MapPin,
  Star,
  Users,
} from "lucide-react";

function WorkerDashboard() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Switch repair",
      distance: "1.8 km",
      time: "Today",
    },
    {
      id: 2,
      title: "Wiring check",
      distance: "2.6 km",
      time: "Tomorrow",
    },
    {
      id: 3,
      title: "Light installation",
      distance: "3.1 km",
      time: "Tomorrow",
    },
  ]);

  const acceptRequest = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  return (
    <main className="page dashboard-page">
      <div className="dashboard-header">
        <div>
          <p className="section-label">WORKER DASHBOARD</p>
          <h1>Hello, Ramesh 👋</h1>
          <p>Here's what's happening with your work.</p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="secondary-btn"
            onClick={() => navigate("/profile")}
          >
            View public profile
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/worker-login")}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <IndianRupee />
          <span>This month</span>
          <strong>₹24,680</strong>
          <small>+12% from last month</small>
        </div>

        <div className="stat-card">
          <CalendarDays />
          <span>Jobs completed</span>
          <strong>124</strong>
          <small>8 this month</small>
        </div>

        <div className="stat-card">
          <Star />
          <span>Rating</span>
          <strong>4.8</strong>
          <small>From 96 reviews</small>
        </div>

        <div className="stat-card">
          <Users />
          <span>Profile views</span>
          <strong>286</strong>
          <small>Last 30 days</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-card">
          <div className="dashboard-card-title">
            <div>
              <h2>Upcoming jobs</h2>
              <p>Your scheduled services</p>
            </div>

            <span className="count-badge">2</span>
          </div>

          <div className="job-row">
            <div className="job-icon">
              <CalendarDays />
            </div>

            <div>
              <strong>Electrical repair</strong>
              <p>Today · 4:30 PM</p>
              <span>
                <MapPin size={13} />
                Vijay Nagar, Indore
              </span>
            </div>

            <button onClick={() => navigate("/bookings")}>Details</button>
          </div>

          <div className="job-row">
            <div className="job-icon">
              <Clock3 />
            </div>

            <div>
              <strong>Fan installation</strong>
              <p>Tomorrow · 11:00 AM</p>
              <span>
                <MapPin size={13} />
                Rau, Indore
              </span>
            </div>

            <button onClick={() => navigate("/bookings")}>Details</button>
          </div>
        </section>

        <section className="dashboard-card">
          <div className="dashboard-card-title">
            <div>
              <h2>New requests</h2>
              <p>Customers looking for help</p>
            </div>

            <span className="count-badge">{requests.length}</span>
          </div>

          {requests.length === 0 ? (
            <div className="request-row">
              <div>
                <strong>No new requests</strong>
                <p>You're all caught up.</p>
              </div>
            </div>
          ) : (
            requests.map((request) => (
              <div className="request-row" key={request.id}>
                <div>
                  <strong>{request.title}</strong>
                  <p>
                    {request.distance} · {request.time}
                  </p>
                </div>

                <button
                  className="accept"
                  onClick={() => acceptRequest(request.id)}
                >
                  Accept
                </button>
              </div>
            ))
          )}
        </section>
      </div>

      <section className="dashboard-card verification-status">
        <CheckCircle2 size={24} />

        <div>
          <strong>Cooperative verification complete</strong>
          <p>Your skills and cooperative membership have been verified.</p>
        </div>

        <span>Verified</span>
      </section>
    </main>
  );
}

export default WorkerDashboard;
