import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import ParticlesBG from "../components/ParticlesBG";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <ParticlesBG />
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="main-title"
          >
            <span className="gradient-text">ALIVE INC</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="subtitle"
          >
            We Build The Future With{" "}
            <ReactTyped
              strings={[
                "Blockchain",
                "Web Development",
                "AI & Machine Learning",
                "UI/UX Design",
                "Mobile Applications",
                "Cloud Solutions",
                "Your Vision",
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
              className="typed-text"
            />
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
          >
            <a href="#contact" className="cta-btn">
              Start Your Project
            </a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="scroll-indicator"
          >
            <svg className="arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Expertise
          </motion.h2>

          <div className="services-grid">
            {[
              { icon: "fas fa-code", title: "Web Development", desc: "React, Next.js, Node.js, Laravel, Django" },
              { icon: "fab fa-react", title: "Frontend Mastery", desc: "React, Vue, Angular, Tailwind, Framer Motion" },
              { icon: "fas fa-mobile-alt", title: "Mobile Apps", desc: "React Native, Flutter, iOS, Android" },
              { icon: "fas fa-brain", title: "AI & ML", desc: "TensorFlow, Python, ChatGPT, Automation" },
              { icon: "fas fa-cube", title: "Blockchain", desc: "Ethereum, Solana, Smart Contracts, Web3" },
              { icon: "fas fa-palette", title: "UI/UX Design", desc: "Figma, Adobe XD, 3D Design, Animation" },
              { icon: "fas fa-cloud", title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes, CI/CD" },
              { icon: "fas fa-shield-alt", title: "Cyber Security", desc: "Penetration Testing, Secure Architecture" },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15, scale: 1.05 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <i className={`${service.icon} service-icon`}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title white"
          >
            Why Choose Alive Inc?
          </motion.h2>
          <div className="why-grid">
            {[
              "10+ Years Experience",
              "500+ Projects Delivered",
              "24/7 Dedicated Support",
              "100% Client Satisfaction",
              "Cutting-Edge Technology",
              "Affordable & Transparent Pricing",
              "On-Time Delivery",
              "Free Maintenance (3 Months)"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.15, type: "spring" }}
                viewport={{ once: true }}
                className="why-card"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;