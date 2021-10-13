import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div id="home" className="px-4 py-6 lg:px-20 lg:py-10 h-screen">
      <div className="bg-hero h-full w-full bg-cover bg-bottom rounded-2xl ">
        <div className="h-full w-full bg-black bg-opacity-40 ">
          <div className="hero-logo h-3/4 flex items-center justify-center lg:justify-start lg:pl-24">
            <motion.div
              initial={{
                x: -700,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                duration: 1.5,
              }}
              className="bg-filter p-10 backdrop-filter backdrop-blur-sm bg-black bg-opacity-40 rounded-2xl"
            >
              <img src="/images/logo.png" alt="" />
            </motion.div>
          </div>

          <div className="button-wrapper flex justify-center">
            <button className="rounded py-2 px-20 bg-gradient-to-r border-2 border-blue-900  from-primary text-blue-900 font-bold text-2xl to-primary-light transition transform hover:scale-105">
              MINT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
