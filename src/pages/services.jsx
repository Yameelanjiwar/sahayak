import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Wrench,
  Droplets,
  Hammer,
  Paintbrush,
  Sparkles,
  Sprout,
  HeartPulse,
  Car,
  Laptop,
} from "lucide-react";

const services = [
  {
    title: "Electrician",
    description: "Electrical installation, repair and maintenance",
    icon: Wrench,
  },
  {
    title: "Plumber",
    description: "Pipes, taps, water supply and plumbing repair",
    icon: Droplets,
  },
  {
    title: "Carpenter",
    description: "Furniture, doors, fittings and woodwork",
    icon: Hammer,
  },
  {
    title: "Painter",
    description: "Home, office and commercial painting",
    icon: Paintbrush,
  },
  {
    title: "Cleaning",
    description: "Home, office and community cleaning",
    icon: Sparkles,
  },
  {
    title: "Gardener",
    description: "Garden maintenance and outdoor support",
    icon: Sprout,
  },
  {
    title: "Caregiver",
    description: "Companionship and household care support",
    icon: HeartPulse,
  },
  {
    title: "Driver",
    description: "Local driving and transport assistance",
    icon: Car,
  },
  {
    title: "Technician",
    description: "Appliance and equipment maintenance",
    icon: Laptop,
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <main className="page">
      <section className="page-header">
        <p className="section-label">OUR SERVICES</p>
        <h1>What service do you need?</h1>
        <p>
          Choose a service and connect with verified cooperative workers near
          you.
        </p>
      </section>

      <section className="services-list">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                <Icon size={28} />
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <button
                className="service-select"
                onClick={() =>
                  navigate(
                    `/workers?service=${encodeURIComponent(service.title)}`,
                  )
                }
              >
                Find workers <ArrowRight size={17} />
              </button>
            </div>
          );
        })}
      </section>

      <section className="emergency-box">
        <div>
          <strong>Need urgent help?</strong>
          <p>Use emergency booking to find an available worker quickly.</p>
        </div>

        <button onClick={() => navigate("/booking?emergency=true")}>
          Emergency Booking <ArrowRight size={17} />
        </button>
      </section>
    </main>
  );
}

export default Services;
