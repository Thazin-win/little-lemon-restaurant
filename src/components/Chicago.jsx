import React from "react";
import chicago from "../assets/chicago.jpg";
import "./Chicago.css";

const Chicago = () => {
  return (
    <div>
      <section class="hero-section">
        <div class="section-content">
          <div class="hero-details">
            <h2 class="title">Little Lemon</h2>
            <h3 class="subtitle">Chicago</h3>
            <p class="description">
              We are a family owned Mediterranean restaurant, focused on
              traditional receipes served with amodern twist.
            </p>

            <div class="buttons">
              <a href="#" class="button order-now">
                Reserve a table
              </a>
            </div>
          </div>

          <div class="hero-image-wrapper">
            <img src={chicago} alt="hero" class="hero-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chicago;
