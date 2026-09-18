import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  Briefcase,
  Clock,
  Calendar,
  CheckCircle,
} from "lucide-react";

const workers = [
  {
    name: "Ramesh Kumar",
    skill: "Electrician",
    rating: "4.8",
    jobs: "124",
    experience: "6 Years",
    initials: "RK",
    price: "₹299",
  },
  {
    name: "Amit Sharma",
    skill: "Electrician",
    rating: "4.7",
    jobs: "98",
    experience: "5 Years",
    initials: "AS",
    price: "₹349",
  },
  {
    name: "Suresh Patel",
    skill: "Electrician",
    rating: "4.9",
    jobs: "156",
    experience: "8 Years",
    initials: "SP",
    price: "₹399",
  },
];

function Profile() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const workerName = searchParams.get("worker");
  const worker = workers.find((item) => item.name === workerName);

  if (!worker) {
    return (
      <main className="page">
        <div className="page-header">
          <p className="section-label">WORKER PROFILE</p>
          <h1>Worker not found</h1>
          <p>Please select a worker again.</p>

          <button
            className="primary-btn"
            onClick={() => navigate("/workers?service=Electrician")}
          >
            Back to Workers
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <button
        className="back-button"
        onClick={() => navigate("/workers?service=Electrician")}
      >
        <ArrowLeft size={18} />
        Back to Workers
      </button>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">{worker.initials}</div>

          <div className="profile-title">
            <div className="profile-name">
              <h1>{worker.name}</h1>
              <CheckCircle size={18} className="verified-icon" />
            </div>

            <p>Professional {worker.skill}</p>

            <div className="profile-location">
              <MapPin size={14} />
              Available near you
            </div>

            <div className="availability">
              <span></span>
              Available for bookings
            </div>
          </div>
        </div>

        <div className="profile-rating">
          <Star size={18} fill="currentColor" />
          <strong>{worker.rating}</strong>
          <span>{worker.jobs} completed jobs</span>
        </div>

        <div className="profile-info-grid">
          <div>
            <Briefcase size={20} />
            <strong>{worker.jobs}</strong>
            <span>Jobs Completed</span>
          </div>

          <div>
            <Clock size={20} />
            <strong>{worker.experience}</strong>
            <span>Experience</span>
          </div>

          <div>
            <Calendar size={20} />
            <strong>{worker.price}</strong>
            <span>Starting Price</span>
          </div>
        </div>

        <div className="profile-section">
          <h2>About {worker.name}</h2>
          <p>
            Professional {worker.skill.toLowerCase()} with{" "}
            {worker.experience.toLowerCase()} of experience. Trusted by local
            customers for reliable and quality service.
          </p>
        </div>

        <div className="profile-section">
          <h2>Skills</h2>

          <div className="skill-list">
            <span>{worker.skill}</span>
            <span>Home Repairs</span>
            <span>Maintenance</span>
            <span>Installation</span>
          </div>
        </div>

        <div className="profile-section">
          <h2>Customer Reviews</h2>

          <div className="review-mini">
            <div className="avatar small">RK</div>

            <div>
              <strong>Rahul</strong>
              <div className="stars">★★★★★</div>
              <p>Good service and very professional.</p>
            </div>
          </div>

          <div className="review-mini">
            <div className="avatar small">AS</div>

            <div>
              <strong>Ankit</strong>
              <div className="stars">★★★★★</div>
              <p>Arrived on time and fixed the issue quickly.</p>
            </div>
          </div>
        </div>

        <div className="profile-booking">
          <div>
            <span>Starting price</span>
            <strong>{worker.price}</strong>
          </div>

          <button
            className="book-now-btn"
            onClick={() =>
              navigate(
                `/booking?worker=${encodeURIComponent(worker.name)}&service=${encodeURIComponent(worker.skill)}`,
              )
            }
          >
            <Calendar size={17} />
            Book Now
          </button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
