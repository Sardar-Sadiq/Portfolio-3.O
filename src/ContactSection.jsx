import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FireEffectFooter from "./FireEffectFooter"; // Import the FireEffectFooter component
import "./font.css";

const ContactSection = () => {
  // Animation controls for Framer Motion
  const headerControls = useAnimation();
  const footerControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      headerControls.start("visible");
      footerControls.start("visible");
    }
  }, [inView, headerControls, footerControls]);

  // Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black justify-center items-center">
      <div className="w-[87%] relative text-[#e7caca]" ref={ref}>
        <motion.div
          className="flex flex-col justify-center items-center border-[1px] mt-5 md:mt-20 border-[#f1f1da1A] h-[650px] rounded-[3rem] relative" // Add 'relative' here
          initial="hidden"
          animate={headerControls}
          variants={headerVariants}
        >
          <div className="text-center absolute top-12 space-y-[-10px]">
            <motion.p
              className="text-[35px] text-[#F1DADA] md:text-[60px] contact-p"
              variants={headerVariants}
            >
              Looking for a new talent?
            </motion.p>
            <motion.h1
              className="font-sans contact-a"
              style={{
                letterSpacing: -1,
                fontWeight: 450,
                fontSize: "clamp(24px, 8vw, 130px)",
                lineHeight: "1.2",
              }}
              variants={headerVariants}
            >
              <a href="mailto:sardarsadiq001@gmail.com">hello@sardarsadiq.fr</a>
            </motion.h1>
          </div>

          {/* Links Section */}
          <motion.div
            className="flex space-x-10 text-lg"
            initial="hidden"
            animate={headerControls}
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          >
            <button className="flex items-center space-x-2 text-[#e7caca] hover:text-white transition-colors">
              <span className="text-pink-400">●</span>
              <span>LinkedIn</span>
            </button>
            <button className="flex items-center space-x-2 text-[#e7caca] hover:text-white transition-colors">
              <span className="text-pink-400">●</span>
              <span>Download CV</span>
            </button>
          </motion.div>

          {/* FireEffectFooter */}
          <div className="absolute bottom-0 left-10 w-full">
            <FireEffectFooter  />
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.footer
          className="h-auto mt-5 text-[#f1dada] p-4 flex justify-between items-center"
          initial="hidden"
          animate={footerControls}
          variants={footerVariants}
        >
          {/* Left Section: Copyright */}
          <motion.div
            className="text-[12px] contact-t font-bold opacity-60"
            variants={footerVariants}
          >
            ©2024 Sardar Sadiq.
          </motion.div>

          {/* Center Section: Status */}
          <motion.div
            className="flex items-center space-x-2"
            variants={footerVariants}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full contact-a"></span>
            <span className="font-semibold text-[16px] contact-t">
              Available for a full-time position
            </span>
          </motion.div>

          {/* Right Section: Credit */}
          <motion.div
            className="text-[12px] font-bold contact-t opacity-60"
            variants={footerVariants}
          >
            Made by Sardar Sadiq.
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
};

export default ContactSection;
