import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div
      id="home"
      className="home bg-hero bg-cover bg-left lg:bg-center px-4 py-6  min-h-screen flex flex-col justify-center items-center  lg:py-10 "
    >
      <motion.div
        className="lg:w-1/2"
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
      >
        <img
          src="/images/3dlogo.png"
          width="600"
          className="hero-logo mx-auto flex-shrink-0"
          alt=""
        />
      </motion.div>

      <div className="button-wrapper flex justify-center">
        <button className="py-5 px-28 bg-black font-bold text-2xl mt-24 text-custom-green  transition transform hover:scale-105">
          MINT
        </button>
      </div>
    </div>
  );
};

export default Header;
