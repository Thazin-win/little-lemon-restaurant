import React from "react";
import "./CustomerSays.css";
import usero from "../assets/user-2.jpg";
import usert from "../assets/user-1.jpg";
import userh from "../assets/user-3.jpg";
import userf from "../assets/user-4.jpg";

const CustomerSays = () => {
  return (
    <div>
      <section className="testimonials-section" id="testimonials">
        <h2 className="section-title">Testimonials</h2>
        <div className="section-content">
          <div className="slider-container swiper">
            <div className="slider-wrapper">
              <ul className="testimonials-list swiper-wrapper">
                <li className="testimonial">
                  <img src={usero} alt="user" className="user-image" />
                  <h3 className="name">Sara Johnson</h3>
                  <i className="feedback">
                    "Loved the french roast. Perfectly balanced and rich. Will
                    order agaiin!"
                  </i>
                </li>

                <li className="testimonial">
                  <img src={usert} alt="user" className="user-image" />
                  <h3 className="name">Sara Johnson</h3>
                  <i className="feedback">
                    "Loved the french roast. Perfectly balanced and rich. Will
                    order agaiin!"
                  </i>
                </li>

                <li className="testimonial">
                  <img src={userh} alt="user" className="user-image" />
                  <h3 className="name">Sara Johnson</h3>
                  <i className="feedback">
                    "Loved the french roast. Perfectly balanced and rich. Will
                    order agaiin!"
                  </i>
                </li>

                <li className="testimonial">
                  <img src={userf} alt="user" className="user-image" />
                  <h3 className="name">Sara Johnson</h3>
                  <i className="feedback">
                    "Loved the french roast. Perfectly balanced and rich. Will
                    order agaiin!"
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSays;
