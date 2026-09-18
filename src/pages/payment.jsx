import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  Smartphone,
  Banknote,
  ShieldCheck,
} from "lucide-react";

function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");

  return (
    <main className="page narrow-page">
      <button className="back-button" onClick={() => navigate("/booking")}>
        <ArrowLeft size={18} />
        Back to Booking
      </button>

      <div className="form-header">
        <p className="section-label">SECURE PAYMENT</p>
        <h1>Choose payment method</h1>
        <p>Your booking amount is ₹319.</p>
      </div>

      <div className="payment-card">
        <div className="payment-total">
          <span>Amount payable</span>
          <strong>₹319</strong>
        </div>

        <div className="payment-methods">
          <button
            className={method === "upi" ? "selected" : ""}
            onClick={() => setMethod("upi")}
          >
            <Smartphone size={20} />
            UPI
            <span>›</span>
          </button>

          <button
            className={method === "card" ? "selected" : ""}
            onClick={() => setMethod("card")}
          >
            <CreditCard size={20} />
            Card
            <span>›</span>
          </button>

          <button
            className={method === "cash" ? "selected" : ""}
            onClick={() => setMethod("cash")}
          >
            <Banknote size={20} />
            Cash after service
            <span>›</span>
          </button>
        </div>

        {method === "upi" && (
          <div className="payment-input">
            <label>
              UPI ID
              <input placeholder="example@upi" />
            </label>
          </div>
        )}

        {method === "card" && (
          <div className="payment-input">
            <label>
              Card number
              <input placeholder="1234 5678 9012 3456" />
            </label>

            <div className="two-fields">
              <label>
                Expiry
                <input placeholder="MM/YY" />
              </label>

              <label>
                CVV
                <input placeholder="•••" />
              </label>
            </div>
          </div>
        )}

        {method === "cash" && (
          <div className="cash-note">
            You can pay the worker directly after the service is completed.
          </div>
        )}

        <div className="secure-note">
          <ShieldCheck size={18} />
          Your payment details are protected.
        </div>

        <button
          className="primary-btn full"
          onClick={() => navigate("/confirmation")}
        >
          Confirm Booking · ₹319
        </button>
      </div>
    </main>
  );
}

export default Payment;
