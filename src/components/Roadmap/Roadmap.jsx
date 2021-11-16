import React, { useEffect, useRef, useState } from "react";
import "./Roadmap.css";
import ScrollContainer from "../ScrollContainer/ScrollContainer";
import { useTransform, useViewportScroll, motion } from "framer-motion";
const Roadmap = () => {
  const scrollRef = useRef(null);

  const [topOffset, setTopOffset] = useState(0);

  const [containerHeight, setContainerHeight] = useState(0);

  var cumulativeOffset = function (element) {
    var top = 0;
    do {
      top += element.offsetTop || 0;
      element = element.offsetParent;
    } while (element);

    return top;
  };

  useEffect(() => {
    if (scrollRef.current) {
      setContainerHeight(scrollRef.current.clientHeight);
      setTopOffset(cumulativeOffset(scrollRef.current));
    }
  }, []);

  const { scrollY } = useViewportScroll();

  const percentBgColor = useTransform(
    scrollY,
    [topOffset, topOffset + containerHeight],
    ["#000", "#133d8f"]
  );

  // const itemBgColor = useTransform(
  //   scrollY,
  //   [topOffset + 500, topOffset + containerHeight + 300],
  //   ["#404040", "#7F00FF"]
  // );

  const itemOpacity = useTransform(
    scrollY,
    [topOffset, topOffset + containerHeight - 200],
    [0, 1]
  );

  return (
    <>
      {" "}
      <h1 className="text-6xl font-primary   lg:text-8xl text-center mb-8 mt-10 lg:mt-20 lg:mb-16">
        ROADMAP
      </h1>
      <div
        id="roadmap"
        ref={scrollRef}
        className="roadmap text-black max-w-screen-xl mt-10"
      >
        <div className="milestone">
          <div className="empty"></div>
          <div className="percentage bg-gradient-to-tr from-custom-orange via-yellow-400 to-green-200"></div>
          <div className="roadmap-item bg-custom-gradient bg-cover bg-center  text-lg lg:text-2xl">
            At sellout - 100% of profits will be donated to charity. Project
            Six1Three will plant 613 trees in Israel.
          </div>
        </div>

        <div className="milestone">
          <div className="roadmap-item bg-custom-gradient bg-cover bg-center  text-lg lg:text-2xl">
            Custom Six1Three apparel drop
          </div>
          <div className="percentage bg-gradient-to-tr from-custom-yellow via-yellow-500 to-yellow-600"></div>
          <div className="empty"></div>
        </div>

        <div className="milestone">
          <div className="empty"></div>
          <div className="percentage bg-gradient-to-tr from-custom-green via-green-500 to-blue-200"></div>
          <div className="roadmap-item bg-custom-gradient bg-cover bg-center  text-lg lg:text-2xl">
            18 Rare custom Mezuzahs designed by Coby Katz raffled off.
          </div>
        </div>

        <div className="milestone">
          <div className="roadmap-item bg-custom-gradient bg-cover bg-center  text-lg lg:text-2xl">
            Custom Six1Three apparel drop
          </div>
          <div className="percentage bg-gradient-to-tr from-custom-blue-1 via-blue-400 to-blue-600"></div>
          <div className="empty"></div>
        </div>

        <div className="milestone">
          <div className="empty"></div>
          <motion.div
            style={{
              background: percentBgColor,
            }}
            className="percentage"
          ></motion.div>
          <motion.div
            style={{
              opacity: itemOpacity,
            }}
            className="roadmap-item bg-custom-gradient bg-cover bg-center  text-lg lg:text-2xl"
          >
            Win a chance to go to the Holy Land in an all inclusive luxurious
            and historical trip to Israel for 2.
          </motion.div>
        </div>

        <ScrollContainer />
      </div>
    </>
  );
};

export default Roadmap;
