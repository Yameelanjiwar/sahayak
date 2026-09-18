import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Bell,
  ShieldCheck,
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Sparkles,
  Car,
  ArrowRight,
  Clock3,
  Navigation,
  Phone,
  CalendarDays,
  CreditCard,
  Star,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

function ClientDashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const services = [
    { name: "Plumber", icon: Wrench },
    { name: "Electrician", icon: Zap },
    { name: "Carpenter", icon: Hammer },
    { name: "Painter", icon: Paintbrush },
    { name: "Cleaner", icon: Sparkles },
    { name: "Driver", icon: Car },
  ];

  const workers = [
    {
      name: "Rajesh Kumar",
      service: "Electrician",
      distance: "1.2 km",
      rating: "4.9",
      jobs: "126 jobs",
      available: true,
    },
    {
      name: "Suresh Patel",
      service: "Plumber",
      distance: "2.4 km",
      rating: "4.8",
      jobs: "94 jobs",
      available: true,
    },
    {
      name: "Amit Verma",
      service: "Carpenter",
      distance: "3.1 km",
      rating: "4.7",
      jobs: "81 jobs",
      available: false,
    },
  ];

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="client-dashboard">
      {" "}
      <div className="client-container">
        ```
        <section className="client-topbar">
          <div>
            <p className="section-label">CLIENT DASHBOARD</p>
            <h1>Good evening 👋</h1>
            <p className="client-subtitle">
              Find trusted cooperative workers near you.
            </p>
          </div>

          <div className="client-top-actions">
            <button className="location-pill">
              <MapPin size={17} />
              <span>Indore</span>
              <ChevronRight size={15} />
            </button>

            <button className="notification-btn">
              <Bell size={19} />
              <span className="notification-dot"></span>
            </button>
          </div>
        </section>
        <section className="client-search-area">
          <div className="client-search">
            <Search size={20} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What service do you need?"
            />
          </div>

          <button
            className="emergency-btn"
            onClick={() => navigate("/booking?emergency=true")}
          >
            <AlertCircle size={18} />
            Emergency
          </button>
        </section>
        <section className="dashboard-grid-top">
          <div className="active-booking-card">
            <div className="active-booking-header">
              <div>
                <span className="live-badge">
                  <span></span>
                  LIVE BOOKING
                </span>
                <h2>Electrician service</h2>
              </div>

              <span className="booking-id">#SH2841</span>
            </div>

            <div className="tracking-content">
              <div className="worker-mini">
                <div className="dashboard-avatar">RK</div>

                <div>
                  <strong>Rajesh Kumar</strong>
                  <span>
                    <Star size={13} /> 4.9 · Verified Worker
                  </span>
                </div>
              </div>

              <div className="worker-distance">
                <Navigation size={18} />
                <strong>1.2 km</strong>
                <span>away</span>
              </div>
            </div>

            <div className="tracking-bar">
              <div className="tracking-progress"></div>
            </div>

            <div className="tracking-status">
              <span>
                <CheckCircle2 size={15} />
                Worker accepted your request
              </span>
              <strong>Arriving soon</strong>
            </div>

            <div className="active-booking-actions">
              <button onClick={() => navigate("/bookings")}>
                Track booking
                <ArrowRight size={16} />
              </button>

              <button className="call-btn">
                <Phone size={16} />
                Contact
              </button>
            </div>
          </div>

          <div className="quick-action-card">
            <div className="quick-card-icon">
              <CalendarDays size={22} />
            </div>

            <p className="section-label">UPCOMING</p>
            <h3>Plumber visit</h3>

            <div className="upcoming-info">
              <span>
                <CalendarDays size={15} />
                Tomorrow
              </span>
              <span>
                <Clock3 size={15} />
                10:30 AM
              </span>
            </div>

            <button onClick={() => navigate("/bookings")}>
              View booking
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
        <section className="client-section">
          <div className="client-section-heading">
            <div>
              <p className="section-label">SERVICES</p>
              <h2>What do you need help with?</h2>
            </div>

            <button onClick={() => navigate("/services")}>
              View all
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="client-services-grid">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <button
                  className="client-service-card"
                  key={service.name}
                  onClick={() => navigate("/workers")}
                >
                  <div className="client-service-icon">
                    <Icon size={23} />
                  </div>

                  <span>{service.name}</span>

                  <ArrowRight size={16} />
                </button>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="no-service-result">No matching service found.</div>
          )}
        </section>
        <section className="client-section">
          <div className="client-section-heading">
            <div>
              <p className="section-label">NEAR YOU</p>
              <h2>Verified workers nearby</h2>
            </div>

            <button onClick={() => navigate("/workers")}>
              See all workers
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="nearby-workers">
            {workers.map((worker) => (
              <div className="nearby-worker-card" key={worker.name}>
                <div className="nearby-worker-top">
                  <div className="dashboard-avatar">
                    {worker.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div className="nearby-worker-info">
                    <div className="worker-name-line">
                      <strong>{worker.name}</strong>
                      <ShieldCheck size={16} />
                    </div>

                    <span>{worker.service}</span>

                    <div className="worker-rating">
                      <Star size={14} />
                      {worker.rating}
                      <span>·</span>
                      {worker.jobs}
                    </div>
                  </div>

                  <span
                    className={`availability-dot ${
                      worker.available ? "available" : "busy"
                    }`}
                  >
                    {worker.available ? "Available" : "Busy"}
                  </span>
                </div>

                <div className="nearby-worker-bottom">
                  <span>
                    <Navigation size={15} />
                    {worker.distance} away
                  </span>

                  <button onClick={() => navigate("/workers")}>
                    View profile
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="client-bottom-grid">
          <div className="recent-card">
            <div className="client-section-heading">
              <div>
                <p className="section-label">ACTIVITY</p>
                <h2>Recent bookings</h2>
              </div>

              <button onClick={() => navigate("/bookings")}>
                View all
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="recent-booking">
              <div className="recent-icon">
                <Wrench size={19} />
              </div>

              <div className="recent-info">
                <strong>Plumbing repair</strong>
                <span>Suresh Patel · 14 Sep 2026</span>
              </div>

              <div className="recent-right">
                <strong>₹450</strong>
                <span className="status completed">Completed</span>
              </div>
            </div>

            <div className="recent-booking">
              <div className="recent-icon">
                <Sparkles size={19} />
              </div>

              <div className="recent-info">
                <strong>Home cleaning</strong>
                <span>Meena Sharma · 08 Sep 2026</span>
              </div>

              <div className="recent-right">
                <strong>₹600</strong>
                <span className="status completed">Completed</span>
              </div>
            </div>
          </div>

          <div className="dashboard-trust-card">
            <div className="trust-card-icon">
              <ShieldCheck size={24} />
            </div>

            <p className="section-label">SAHAYAK TRUST</p>

            <h2>Verified workers. Fair services.</h2>

            <p>
              Every worker on SAHAYAK goes through cooperative verification
              before providing services.
            </p>

            <div className="trust-points">
              <span>
                <CheckCircle2 size={15} />
                Identity verified
              </span>

              <span>
                <CheckCircle2 size={15} />
                Skills verified
              </span>

              <span>
                <CheckCircle2 size={15} />
                Cooperative registered
              </span>
            </div>
          </div>
        </section>
        <section className="client-quick-links">
          <button onClick={() => navigate("/bookings")}>
            <CalendarDays size={19} />
            <span>My Bookings</span>
            <ArrowRight size={16} />
          </button>

          <button onClick={() => navigate("/payment")}>
            <CreditCard size={19} />
            <span>Payments</span>
            <ArrowRight size={16} />
          </button>

          <button onClick={() => navigate("/profile")}>
            <UserRoundIcon />
            <span>My Profile</span>
            <ArrowRight size={16} />
          </button>
        </section>
      </div>
    </main>
  );
}

function UserRoundIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <circle cx="12" cy="8" r="4" /> <path d="M5 21a7 7 0 0 1 14 0" />{" "}
    </svg>
  );
}

export default ClientDashboard;
