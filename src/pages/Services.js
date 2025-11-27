import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./Services.css";

const serviceSlides = [
  {
    title: "WEB DEVELOPMENT",
    subtitle: "React • Next.js • Node • Laravel • Full Stack",
    desc: "We Build Websites That Break The Internet",
    gradient: "from-cyan-400 via-blue-600 to-purple-700",
  },
  {
    title: "BLOCKCHAIN & WEB3",
    subtitle: "Ethereum • Solana • Smart Contracts • NFTs • DeFi",
    desc: "Your Gateway To Decentralized Future",
    gradient: "from-purple-600 via-pink-600 to-red-700",
  },
  {
    title: "AI & MACHINE LEARNING",
    subtitle: "ChatGPT • TensorFlow • Python • Automation • Neural Networks",
    desc: "Intelligence That Evolves With You",
    gradient: "from-orange-500 via-red-600 to-pink-700",
  },
  {
    title: "MOBILE APPLICATIONS",
    subtitle: "React Native • Flutter • iOS • Android • Cross Platform",
    desc: "Apps That Live In Every Pocket",
    gradient: "from-green-400 via-emerald-600 to-teal-700",
  },
  {
    title: "UI/UX DESIGN",
    subtitle: "Figma • Framer • 3D • Motion • Branding • Animation",
    desc: "Designs That Don't Just Look — They Feel Alive",
    gradient: "from-pink-500 via-rose-600 to-purple-700",
  },
  {
    title: "CLOUD & DEVOPS",
    subtitle: "AWS • Docker • Kubernetes • CI/CD • Microservices",
    desc: "Scale Infinitely — Sleep Peacefully",
    gradient: "from-indigo-600 via-purple-700 to-blue-800",
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % serviceSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="services-monster">
      {/* GIANT FULL SCREEN SLIDER */}
      <div className="slider-monster">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="slide-monster"
          >
            <div className={`slide-bg bg-gradient-to-br ${serviceSlides[current].gradient}`} />

            <motion.div className="content-monster">
              <motion.h1
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
                className="mega-title"
              >
                {serviceSlides[current].title}
              </motion.h1>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="mega-subtitle"
              >
                <ReactTyped
                  strings={[serviceSlides[current].subtitle]}
                  typeSpeed={50}
                  showCursor={false}
                />
              </motion.p>

              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 80 }}
                className="mega-desc"
              >
                {serviceSlides[current].desc}
              </motion.p>
            </motion.div>

            {/* BIG SLIDER DOTS */}
            <div className="dots-monster">
              {serviceSlides.map((_, i) => (
                <motion.div
                  key={i}
                  className={`dot-big ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                  whileHover={{ scale: 1.5 }}
                  animate={{ scale: i === current ? 1.4 : 1 }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ALL SERVICES GRID BELOW */}
      <section className="all-services">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="all-services-title"
          >
            Every Service You Need — Under One Roof
          </motion.h2>

          <div className="services-grid-big">
            {serviceSlides.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -40,
                  rotate: 3,
                  boxShadow: "0 0 80px rgba(0,255,255,0.8)"
                }}
                className="service-mega-card"
                style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="mega-icon"
                >
                  <i className="fas fa-cogs"></i>
                </motion.div>
                <h3>{service.title}</h3>
                <p className="tech">{service.subtitle}</p>
                <p className="desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;