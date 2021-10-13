import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper mt-10">
      <div className="footer mx-auto max-w-sm md:max-w-xl lg:max-w-4xl border-t-4 border-primary">
        <div className="social-links flex mt-10 justify-center">
          <a href="/" className="">
            <img src="/images/discord-2-32.png" alt="" />
          </a>
          <a href="/" className="ml-10">
            <img src="/images/twitter-32.png" alt="" />
          </a>
          <a href="/" className="ml-10">
            <img src="/images/opensea.png" width="32" alt="" />
          </a>
        </div>
        <div className="links mt-10 text-xl flex items-center flex-col lg:flex-row lg:justify-around w-3/4 mx-auto">
          <Link to="/" className="mt-6 lg:mt-0">
            HOME
          </Link>
          <Link to="/#about" className="mt-6 lg:mt-0">
            ABOUT
          </Link>
          <Link to="/#roadmap" className="mt-6 lg:mt-0">
            ROADMAP
          </Link>
          <Link to="/#faq" className="mt-6 lg:mt-0">
            FAQ
          </Link>
          <Link to="/#team" className="mt-6 lg:mt-0">
            TEAM
          </Link>
        </div>

        <img
          src="/images/logo.png"
          width="150"
          className="mt-10 mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
