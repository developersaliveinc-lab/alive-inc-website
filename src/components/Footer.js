import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="final-alive-footer"
    >
      {/* Top Glow */}
      <div className="glow-top"></div>

      {/* Waves */}
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave wave2"></div>
      </div>

      <div className="footer-grid">

        {/* LEFT - Logo & Contact */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link to="/" className="text-logo">
            <span className="alive">ALIVE</span>
            <span className="inc">INC</span>
          </Link>

          <p className="tagline">
            We Build <span className="highlight">Digital Empires</span> That Never Sleep
          </p>

          <div className="contact-box">
            <a href="tel:+919324745058" className="contact-item phone">
              <i className="fas fa-phone-volume"></i> +91 93247 45058
            </a>
            <a href="mailto:ishaque2004@gmail.com" className="contact-item email">
              <i className="fas fa-envelope"></i> ishaque2004@gmail.com
            </a>
            <a href="https://wa.me/919324745058" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          <p className="address">
            Fantasia Nano Wing, Sector 30A, Vashi<br />
            Navi Mumbai - 400703, Maharashtra, India
          </p>
        </motion.div>

        {/* CENTER - Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Quick Links</h3>
          {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="quick-link"
            >
              → {link}
            </Link>
          ))}
        </motion.div>

        {/* RIGHT - 100% ORIGINAL SOCIAL LOGOS (Google se) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          viewport={{ once: true }}
          className="footer-right"
        >
          <h3>Connect With Us</h3>

          <div className="social-real-icons">
            {/* WhatsApp */}
            <a href="https://wa.me/919324745058" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/ishaque.2004" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/ishaque-shaikh-2004" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/ishaque.shaikh.2004" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
          </div>

          <a
            href="https://wa.me/919324745058?text=Hi%20Ishaque%20Bhai!%20Website%20banwa%20do"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Start Project Now
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>© {year} ALIVE INC — All Rights Reserved</p>
        <p>Made with <span className="heart">Love</span> by <strong>Ishaque Khan</strong></p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;