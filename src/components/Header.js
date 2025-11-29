import React from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import logo from "../images/logo.png"; // ✅ Import your logo from src/images

const Header = () => {
  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Alive Inc Logo" className="logo-img" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
