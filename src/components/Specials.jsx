import React from "react";
import "./Specials.css";
import salad from "../assets/greeksalad.jpg";
import chip from "../assets/chip.jpg";
import bru from "../assets/bruchetta.jpg";

const Specials = () => {
  return (
    <div>
      <section className="menu-section" id="menu">
        <div className="section-content">
          <div className="weeks">
            <h1 className="title">This weeks Specials!</h1>
            <button className="btn">Online Menu</button>
          </div>
          <ul className="menu-list">
            <li className="menu-item">
              <img src={chip} alt="hb" className="menu-image" />
              <div className="menu-details">
                <div className="dish">
                  <h1 className="nane">Greek Salad</h1>
                  <p className="price">$12.99</p>
                </div>
                <div className="description">
                  <p>
                    The famous greek salad of crispy lettuce,peppers,olives and
                    our Chicago Style cheese,garnished with crunchy garlic and
                    rosemary croutons
                  </p>
                  <div className="order">Order a delivery</div>
                </div>
              </div>
            </li>
            <li className="menu-item">
              <img src={salad} alt="cb" className="menu-image" />
              <div className="menu-details">
                <div className="dish">
                  <h1 className="nane">Greek Salad</h1>
                  <p className="price">$12.99</p>
                </div>
                <div className="description">
                  <p>
                    The famous greek salad of crispy lettuce,peppers,olives and
                    our Chicago Style cheese,garnished with crunchy garlic and
                    rosemary croutons
                  </p>
                  <div className="order">Order a delivery</div>
                </div>
              </div>
            </li>
            <li className="menu-item">
              <img src={bru} alt="reftesh" className="menu-image" />
              <div className="menu-details">
                <div className="dish">
                  <h1 className="nane">Greek Salad</h1>
                  <p className="price">$12.99</p>
                </div>
                <div className="description">
                  <p>
                    The famous greek salad of crispy lettuce,peppers,olives and
                    our Chicago Style cheese,garnished with crunchy garlic and
                    rosemary croutons
                  </p>
                  <div className="order">Order a delivery</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Specials;
