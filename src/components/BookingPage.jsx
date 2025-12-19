import React from "react";
import "./BookingPage.css";

const BookingPage = () => {
  return (
    <div>
      <section class="contact-section" id="contact">
        <h2 class="section-title">Contact Us</h2>
        <div class="section-content">
          <ul class="contact-info-list">
            <li class="contact-info">
              <i class="fa-solid fa-location-crosshairs"></i>
              <p>123 cxamosite Avenue, Wilderness, CA 98765</p>
            </li>
            <li class="contact-info">
              <i class="fa-regular fa-envelope"></i>
              <p>infocoffeeshop@gmail.Combo</p>
            </li>
            <li class="contact-info">
              <i class="fa-solid fa-phone"></i>
              <p>123 456 789</p>
            </li>
            <li class="contact-info">
              <i class="fa-regular fa-clock"></i>
              <p>monday friday 9:00AM - 5:00 PM</p>
            </li>
            <li class="contact-info">
              <i class="fa-regular fa-clock"></i>
              <p>monday friday 9:00AM - 5:00 PM</p>
            </li>
            <li class="contact-info">
              <i class="fa-regular fa-clock"></i>
              <p>Sunday :Closed</p>
            </li>
            <li class="contact-info">
              <i class="fa-solid fa-globe"></i>
              <p>www.codingnepalweb.com</p>
            </li>
          </ul>

          <form action="#" class="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              class="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              class="form-input"
              required
            />
            <textarea
              placeholder="Your message"
              class="form-input"
              required
            ></textarea>
            <button class="submit-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
