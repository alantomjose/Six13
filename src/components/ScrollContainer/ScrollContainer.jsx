import { useTransform, useViewportScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./ScrollContainer.css";

const ScrollContainer = () => {
  const scrollRef = useRef(null);

  const [windowScrollY, setScrollY] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  const [containerHeight, setContainerHeight] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

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
    }
  }, [scrollRef.current?.clientHeight]);

  useEffect(() => {
    if (scrollRef.current) {
      setTopOffset(cumulativeOffset(scrollRef.current));
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { scrollY } = useViewportScroll();

  const progressBarHeight = (windowScrollY - topOffset - 200) * 1.2;

  const progressBgColor = useTransform(
    scrollY,
    [0, topOffset, topOffset + 500, topOffset + containerHeight],
    ["#000000", "#f0a401", "#3edb51", "#133d8f"]
  );

  return (
    <div className="scroll-container" ref={scrollRef}>
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height:
            scrollY - topOffset < 0
              ? 0
              : Math.min(containerHeight, progressBarHeight),
        }}
        className="progress-bar"
        style={{
          backgroundColor: progressBgColor,
          // height:
          //   scrollY - topOffset < 0
          //     ? 0
          //     : Math.min(
          //         containerHeight - (10 / 100) * containerHeight,
          //         progressBarHeight
          //       ),
        }}
      ></motion.div>
    </div>
  );
};

export default ScrollContainer;
