import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="section-content">
          <p className="copyright-text">@ 2024 Coffee Shop</p>

          <div className="social-link-list">
            <a href="#" class="social-link">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>

          <p className="policy-text">
            <a href="#" class="policy-link">
              Privacy policy
            </a>
            <span className="separator">.</span>
            <a href="#" class="policy-link">
              Refund poicy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
