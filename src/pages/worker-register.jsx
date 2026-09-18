import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

function WorkerRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Electrician",
    experience: "",
  });

  const update = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/worker-dashboard");
  };

  return (
    <main className="page narrow-page">
      <button className="back-button" onClick={() => navigate("/")}>
        <ArrowLeft size={18} />
        Back Home
      </button>

      <div className="form-header">
        <p className="section-label">JOIN SAHAYAK</p>

        <h1>Become a cooperative worker</h1>

        <p>
          Build your profile and connect with households looking for your
          skills.
        </p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
          />
        </label>

        <label>
          Mobile number
          <input
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 98765 43210"
          />
        </label>

        <label>
          Primary skill
          <select
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option>Electrician</option>
            <option>Plumber</option>
            <option>Carpenter</option>
            <option>Painter</option>
            <option>Cleaning</option>
            <option>Gardener</option>
            <option>Caregiver</option>
            <option>Driver</option>
            <option>Technician</option>
          </select>
        </label>

        <label>
          Years of experience
          <input
            required
            value={form.experience}
            onChange={(e) => update("experience", e.target.value)}
            placeholder="e.g. 5 years"
          />
        </label>

        <label>
          About your work
          <textarea
            rows="4"
            placeholder="Tell customers about your skills and experience..."
          />
        </label>

        <div className="verification-note">
          <CheckCircle2 size={19} />

          <span>
            Your profile will be reviewed by the cooperative before becoming
            publicly visible.
          </span>
        </div>

        <button className="primary-btn full" type="submit">
          Submit Registration
        </button>
      </form>
    </main>
  );
}

export default WorkerRegister;
