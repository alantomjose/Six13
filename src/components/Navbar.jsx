import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      console.log(location.hash);
      if (elem) {
        elem.scrollIntoView({ alignToTop: true, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    setShowNav(false);
  }, [location]);

  return (
    <nav className="bg-black z-10 fixed top-0 py-5 left-0 right-0 flex text-white  lg:py-5 px-5 lg:px-8 items-center justify-between">
      <div className="nav-left-container flex"></div>

      <button className="block  lg:hidden" onClick={toggleNav}>
        <div
          className={`w-10 bg-white h-0.5  transition ${
            showNav ? "transform rotate-45 translate-y-2.5" : " "
          }`}
        ></div>
        <div
          className={`w-10 bg-white h-0.5 mt-2 transition ${
            showNav ? "hidden" : " "
          }`}
        ></div>
        <div
          className={`w-10 bg-white h-0.5 mt-2 transition ${
            showNav ? "transform -rotate-45" : " "
          }`}
        ></div>
      </button>

      <ul
        className={`links flex z-10  bg-black font-primary flex-col absolute left-0 ${
          showNav ? "top-full" : "-top-96"
        } w-screen lg:top-0  text-xl lg:text-3xl lg:relative lg:flex-row transition-all duration-500 lg:w-1/2 justify-between items-center`}
      >
        <li className="p-2 nav-link">
          <Link to="/#home">HOME</Link>
        </li>
        <li className="p-2 nav-link">
          <Link to="/#about">ABOUT</Link>
        </li>
        <li className="p-2 nav-link">
          <Link to="/#roadmap">ROADMAP</Link>
        </li>
        <li className="p-2 nav-link">
          <Link to="/#faq">FAQ</Link>
        </li>
        <li className="p-2 nav-link">
          <Link to="/#team">TEAM</Link>
        </li>
        <li className="p-2">
          <button className="my-2 bg-gradient-to-r from-primary to-primary-light   py-2 px-3 rounded  lg:my-0">
            CONNECT WALLET
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
