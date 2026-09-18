import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  Briefcase,
  Clock,
  UserRound,
  CheckCircle,
  Eye,
  Calendar,
} from "lucide-react";

const workers = [
  {
    name: "Ramesh Kumar",
    skill: "Electrician",
    rating: "4.8",
    distance: "1.2 km",
    jobs: "124",
    experience: "6 Years",
    initials: "RK",
    price: "₹299",
  },
  {
    name: "Amit Sharma",
    skill: "Electrician",
    rating: "4.7",
    distance: "2.4 km",
    jobs: "98",
    experience: "5 Years",
    initials: "AS",
    price: "₹349",
  },
  {
    name: "Suresh Patel",
    skill: "Electrician",
    rating: "4.9",
    distance: "3.1 km",
    jobs: "156",
    experience: "8 Years",
    initials: "SP",
    price: "₹399",
  },
];

function Workers() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const service = searchParams.get("service") || "Electrician";

  const filteredWorkers = workers.filter(
    (worker) => worker.skill.toLowerCase() === service.toLowerCase(),
  );

  const handleProfile = (worker) => {
    navigate(
      `/profile?worker=${encodeURIComponent(worker.name)}&service=${encodeURIComponent(service)}`,
    );
  };

  const handleBooking = (worker) => {
    navigate(
      `/booking?worker=${encodeURIComponent(worker.name)}&service=${encodeURIComponent(service)}`,
    );
  };

  return (
    <main className="page">
      <button className="back-button" onClick={() => navigate("/services")}>
        <ArrowLeft size={18} />
        Back to Services
      </button>

      <div className="page-header left">
        <p className="section-label">AVAILABLE WORKERS</p>

        <h1>{service}s near you</h1>

        <p>Choose a verified professional for your service.</p>
      </div>

      <div className="filter-row">
        <span>{filteredWorkers.length} workers available</span>

        <button onClick={() => navigate("/services")}>Change Service</button>
      </div>

      {filteredWorkers.length === 0 ? (
        <div className="booking-form" style={{ textAlign: "center" }}>
          <UserRound
            size={50}
            style={{
              margin: "0 auto 15px",
              color: "var(--muted)",
            }}
          />

          <h2>No workers available</h2>

          <p style={{ color: "var(--muted)" }}>
            There are currently no workers available for {service}.
          </p>

          <button className="primary-btn" onClick={() => navigate("/services")}>
            Choose Another Service
          </button>
        </div>
      ) : (
        <div className="workers-list">
          {filteredWorkers.map((worker) => (
            <div className="worker-card" key={worker.name}>
              <div className="worker-top">
                <div className="large-avatar">{worker.initials}</div>

                <div className="worker-info">
                  <div className="name-row">
                    <h2>{worker.name}</h2>

                    <CheckCircle size={16} className="verified-icon" />
                  </div>

                  <p>Professional {worker.skill}</p>

                  <div className="worker-details">
                    <span>
                      <Star size={13} />
                      {worker.rating}
                    </span>

                    <span>
                      <MapPin size={13} />
                      {worker.distance}
                    </span>
                  </div>
                </div>
              </div>

              <div className="worker-stats">
                <div>
                  <strong>{worker.jobs}</strong>
                  <span>Jobs</span>
                </div>

                <div>
                  <strong>{worker.experience}</strong>
                  <span>Experience</span>
                </div>

                <div>
                  <strong>{worker.price}</strong>
                  <span>Starting</span>
                </div>
              </div>

              <div className="worker-actions">
                <button
                  className="outline-btn"
                  onClick={() => handleBooking(worker)}
                >
                  <Calendar size={14} />
                  Book
                </button>

                <button
                  className="view-profile-btn"
                  onClick={() => handleProfile(worker)}
                >
                  <Eye size={14} />
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Workers;
