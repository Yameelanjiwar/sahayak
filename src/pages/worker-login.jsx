import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HandHelping, ShieldCheck } from "lucide-react";

function WorkerLogin() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <HandHelping size={25} />
        </div>

        <p className="section-label">WORKER PORTAL</p>

        <h1>Welcome back</h1>

        <p>Sign in to manage your services and bookings.</p>

        <label>
          Mobile number
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
          />
        </label>

        <label>
          Password
          <input type="password" placeholder="Enter password" />
        </label>

        <button
          className="primary-btn full"
          onClick={() => navigate("/worker-dashboard")}
        >
          Sign In
        </button>

        <div className="auth-divider">or</div>

        <button
          className="secondary-btn full"
          onClick={() => navigate("/worker-register")}
        >
          Create worker account
        </button>

        <div className="auth-note">
          <ShieldCheck size={16} />
          Your account is protected.
        </div>
      </div>
    </main>
  );
}

export default WorkerLogin;
