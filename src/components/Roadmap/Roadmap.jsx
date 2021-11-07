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
    [topOffset, topOffset + containerHeight + 50],
    ["#0D8278", "#7F00FF"]
  );

  const itemBgColor = useTransform(
    scrollY,
    [topOffset + 500, topOffset + containerHeight + 300],
    ["#404040", "#7F00FF"]
  );

  return (
    <>
      {" "}
      <h1 className="font-bold  text-2xl text-center mb-8 mt-10 lg:mt-20 lg:mb-16 lg:text-5xl">
        ROADMAP
      </h1>
      <div
        id="roadmap"
        ref={scrollRef}
        className="roadmap max-w-screen-xl mt-10"
      >
        <div className="milestone">
          <div className="empty"></div>
          <div className="percentage"></div>
          <div className="roadmap-item  text-lg lg:text-2xl">
            At sellout - 100% of profits will be donated to charity. Project
            Six1Three will plant 613 trees in Israel.
          </div>
        </div>

        <div className="milestone">
          <div className="roadmap-item  text-lg lg:text-2xl">
            Custom Six1Three apparel drop
          </div>
          <div className="percentage"></div>
          <div className="empty"></div>
        </div>

        <div className="milestone">
          <div className="empty"></div>
          <div className="percentage"></div>
          <div className="roadmap-item  text-lg lg:text-2xl">
            18 Rare custom Mezuzahs designed by Coby Katz raffled off.
          </div>
        </div>

        <div className="milestone">
          <div className="roadmap-item  text-lg lg:text-2xl">
            Custom Six1Three apparel drop
          </div>
          <div className="percentage"></div>
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
              background: itemBgColor,
            }}
            className="roadmap-item  text-lg lg:text-2xl"
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
