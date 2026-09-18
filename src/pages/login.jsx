import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HandHelping,
  UserRound,
  BriefcaseBusiness,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="auth-page">
      {" "}
      <div className="auth-card role-card">
        {" "}
        <div className="auth-logo">
          {" "}
          <HandHelping size={25} />{" "}
        </div>
        ```
        <p className="section-label">WELCOME TO SAHAYAK</p>
        <h1>How would you like to continue?</h1>
        <p>Select your account type to continue.</p>
        <div className="role-options">
          <button
            className="role-option"
            onClick={() => navigate("/client-login")}
          >
            <div className="role-icon">
              <UserRound size={25} />
            </div>

            <div className="role-content">
              <strong>I'm a Client</strong>
              <span>Find and book verified cooperative workers</span>
            </div>

            <ArrowRight size={19} />
          </button>

          <button
            className="role-option"
            onClick={() => navigate("/worker-login")}
          >
            <div className="role-icon">
              <BriefcaseBusiness size={25} />
            </div>

            <div className="role-content">
              <strong>I'm a Worker</strong>
              <span>Manage services, bookings and work requests</span>
            </div>

            <ArrowRight size={19} />
          </button>
        </div>
        <div className="auth-note">
          <ShieldCheck size={16} />
          Secure access for SAHAYAK members
        </div>
      </div>
    </main>
  );
}

export default Login;
