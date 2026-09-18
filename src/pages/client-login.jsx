import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, HandHelping, ShieldCheck } from "lucide-react";

function ClientLogin() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  return (
    <main className="auth-page">
      {" "}
      <div className="auth-card">
        <button className="auth-back" onClick={() => navigate("/login")}>
          {" "}
          <ArrowLeft size={17} />
          Change account type{" "}
        </button>
        ```
        <div className="auth-logo">
          <HandHelping size={25} />
        </div>
        <p className="section-label">CLIENT PORTAL</p>
        <h1>Welcome back</h1>
        <p>Sign in to book and manage your services.</p>
        <label>
          Mobile number
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            required
          />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter password" required />
        </label>
        <button
          className="primary-btn full"
          onClick={() => navigate("/client-dashboard")}
        >
          Sign In
        </button>
        <div className="auth-divider">or</div>
        <button
          className="secondary-btn full"
          onClick={() => navigate("/services")}
        >
          Continue as Guest
        </button>
        <div className="auth-note">
          <ShieldCheck size={16} />
          Your account is protected.
        </div>
      </div>
    </main>
  );
}

export default ClientLogin;
