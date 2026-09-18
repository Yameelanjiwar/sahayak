import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

function Review() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  return (
    <main className="page narrow-page">
      <button className="back-button" onClick={() => navigate("/bookings")}>
        <ArrowLeft size={18} />
        Back to Bookings
      </button>

      <div className="form-header">
        <p className="section-label">YOUR FEEDBACK</p>

        <h1>Rate your service</h1>

        <p>How was your experience with Ramesh Kumar?</p>
      </div>

      <div className="review-form">
        <div className="review-worker">
          <div className="avatar">RK</div>

          <div>
            <strong>Ramesh Kumar</strong>
            <span>Electrician · Completed 18 Sep</span>
          </div>
        </div>

        <div className="star-picker">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => setRating(n)} type="button">
              <Star size={35} fill={n <= rating ? "currentColor" : "none"} />
            </button>
          ))}
        </div>

        <div className="rating-label">
          {rating === 5
            ? "Excellent"
            : rating === 4
              ? "Very good"
              : rating === 3
                ? "Good"
                : rating === 2
                  ? "Needs improvement"
                  : "Poor"}
        </div>

        <textarea
          rows="6"
          placeholder="Tell us about your experience..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="primary-btn full"
          onClick={() => navigate("/bookings")}
        >
          Submit Review
        </button>
      </div>
    </main>
  );
}

export default Review;
