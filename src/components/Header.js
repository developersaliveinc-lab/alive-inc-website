import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header"
    >
      <div className="container">
        <div className="logo">
          <Link to="/">ADVENTURE VERSITE</Link>
        </div>
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