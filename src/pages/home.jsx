import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Star,
  Users,
  Clock3,
  CreditCard,
  HeartHandshake,
  Zap,
  CheckCircle2,
} from "lucide-react";

const services = [
  ["Electrician", "Electrical repair & installation", "⚡"],
  ["Plumber", "Pipes, taps & water systems", "🔧"],
  ["Carpenter", "Furniture & woodwork", "🪚"],
  ["Painter", "Home & office painting", "🎨"],
  ["Cleaning", "Home & community cleaning", "✨"],
  ["Gardener", "Garden & outdoor support", "🌱"],
];

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="badge">
              <ShieldCheck size={16} /> Trusted Cooperative Services
            </div>
            <h1>
              Skilled workers.
              <br />
              <span>Trusted services.</span>
            </h1>
            <p>
              Connect with verified cooperative workers for reliable, affordable
              and community-focused household services.
            </p>
            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => navigate("/services")}
              >
                Find a Service <ArrowRight size={18} />
              </button>
              <button
                className="secondary-btn"
                onClick={() => navigate("/worker-register")}
              >
                Become a Worker
              </button>
            </div>
            <div className="hero-trust">
              <span>
                <CheckCircle2 size={16} /> Verified workers
              </span>
              <span>
                <CheckCircle2 size={16} /> Fair wages
              </span>
              <span>
                <CheckCircle2 size={16} /> Secure booking
              </span>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="floating-card card-one">
              <MapPin size={17} />
              <div>
                <strong>Near you</strong>
                <span>12 workers available</span>
              </div>
            </div>
            <div className="worker-preview">
              <div className="preview-top">
                <div className="avatar">RK</div>
                <div>
                  <div className="name-row">
                    <strong>Ramesh Kumar</strong>
                    <ShieldCheck size={17} />
                  </div>
                  <span>Professional Electrician</span>
                </div>
              </div>
              <div className="preview-rating">
                <Star size={16} fill="currentColor" /> 4.8{" "}
                <span>124 jobs completed</span>
              </div>
              <div className="preview-location">
                <MapPin size={15} /> 1.2 km away · Available today
              </div>
              <button onClick={() => navigate("/profile")}>
                View Profile <ArrowRight size={16} />
              </button>
            </div>
            <div className="floating-card card-two">
              <HeartHandshake size={18} />
              <div>
                <strong>Community powered</strong>
                <span>Cooperative workers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="section-label">POPULAR SERVICES</p>
            <h2>What do you need help with?</h2>
          </div>
          <button className="text-btn" onClick={() => navigate("/services")}>
            View all <ArrowRight size={17} />
          </button>
        </div>
        <div className="service-grid">
          {services.map(([title, desc, icon]) => (
            <button
              className="home-service-card"
              key={title}
              onClick={() => navigate(`/workers?service=${title}`)}
            >
              <div className="emoji-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ArrowRight className="card-arrow" size={18} />
            </button>
          ))}
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-copy">
          <p className="section-label">WHY SAHAYAK?</p>
          <h2>A service marketplace built around people.</h2>
          <p>
            SAHAYAK connects households with skilled cooperative workers while
            supporting fair opportunities, transparent pricing and worker
            welfare.
          </p>
        </div>
        <div className="trust-grid">
          <div>
            <ShieldCheck />
            <h3>Verified workers</h3>
            <p>Skill and cooperative verification for greater trust.</p>
          </div>
          <div>
            <CreditCard />
            <h3>Fair & transparent</h3>
            <p>Clear service pricing and digital invoices.</p>
          </div>
          <div>
            <Users />
            <h3>Community first</h3>
            <p>More opportunities for local cooperative workers.</p>
          </div>
          <div>
            <Clock3 />
            <h3>On-demand help</h3>
            <p>Book regular or emergency services when needed.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <Zap size={28} />
        <div>
          <h2>Need help today?</h2>
          <p>Find a verified worker near you in a few clicks.</p>
        </div>
        <button onClick={() => navigate("/services")}>
          Get Started <ArrowRight size={18} />
        </button>
      </section>
    </main>
  );
}

export default Home;
