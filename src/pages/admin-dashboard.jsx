import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Clock3, IndianRupee, Users, Wrench } from "lucide-react";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <main className="page dashboard-page">
      <div className="dashboard-header">
        <div>
          <p className="section-label">ADMIN DASHBOARD</p>
          <h1>SAHAYAK Overview</h1>
          <p>Manage workers, bookings and cooperative activity.</p>
        </div>

        <button className="secondary-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <Users />
          <span>Total workers</span>
          <strong>248</strong>
          <small>18 new this month</small>
        </div>

        <div className="stat-card">
          <Wrench />
          <span>Active services</span>
          <strong>36</strong>
          <small>Across 9 categories</small>
        </div>

        <div className="stat-card">
          <CheckCircle2 />
          <span>Completed jobs</span>
          <strong>1,842</strong>
          <small>94% completion rate</small>
        </div>

        <div className="stat-card">
          <IndianRupee />
          <span>Platform activity</span>
          <strong>₹8.6L</strong>
          <small>This month</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-card">
          <div className="dashboard-card-title">
            <div>
              <h2>Worker verification</h2>
              <p>Profiles waiting for review</p>
            </div>

            <span className="count-badge">4</span>
          </div>

          <div className="request-row">
            <div>
              <strong>Rahul Verma</strong>
              <p>Electrician · 5 years experience</p>
            </div>

            <button className="accept">Review</button>
          </div>

          <div className="request-row">
            <div>
              <strong>Deepak Yadav</strong>
              <p>Plumber · 7 years experience</p>
            </div>

            <button className="accept">Review</button>
          </div>

          <div className="request-row">
            <div>
              <strong>Sunita Bai</strong>
              <p>Cleaning · 4 years experience</p>
            </div>

            <button className="accept">Review</button>
          </div>
        </section>

        <section className="dashboard-card">
          <div className="dashboard-card-title">
            <div>
              <h2>Recent bookings</h2>
              <p>Latest platform activity</p>
            </div>

            <span className="count-badge">12</span>
          </div>

          <div className="job-row">
            <div className="job-icon">
              <CheckCircle2 />
            </div>

            <div>
              <strong>Electrical repair</strong>
              <p>Completed · ₹299</p>
              <span>Ramesh Kumar</span>
            </div>

            <span className="status completed">Completed</span>
          </div>

          <div className="job-row">
            <div className="job-icon">
              <Clock3 />
            </div>

            <div>
              <strong>Plumbing service</strong>
              <p>Upcoming · ₹449</p>
              <span>Amit Sharma</span>
            </div>

            <span className="status upcoming">Upcoming</span>
          </div>

          <div className="job-row">
            <div className="job-icon">
              <Clock3 />
            </div>

            <div>
              <strong>Fan installation</strong>
              <p>Today · ₹349</p>
              <span>Suresh Patel</span>
            </div>

            <span className="status upcoming">Upcoming</span>
          </div>
        </section>
      </div>

      <section className="dashboard-card verification-status">
        <CheckCircle2 size={24} />

        <div>
          <strong>SAHAYAK cooperative system</strong>
          <p>Worker verification and service management are active.</p>
        </div>

        <span>Active</span>
      </section>
    </main>
  );
}

export default AdminDashboard;
