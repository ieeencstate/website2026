'use client';

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";

const OppoScroll = ({ items }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <div className="bg-white text-black p-4 grid place-items-center">
        <FiArrowDown className="text-xl" />
      </div>
      <section 
        ref={targetRef} 
        className="flex bg-black text-white relative"
        style={{ minHeight: `${items.length * 100}vh` }}
      >
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
      <div className="bg-black text-white p-4 grid place-items-center">
        <FiArrowUp className="text-xl" />
      </div>
    </>
  );
};

const Content = ({ content }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col justify-between ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
          style={{
            fontFamily: 'IBM Plex Mono'
          }}
        >
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="font-light w-full max-w-md">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  // Transform the scroll progress to move images upward
  // We have content.length images, each 100vh tall
  // At scrollYProgress = 0: position should show the first content item (last in reversed array)
  // At scrollYProgress = 1: position should show the last content item (first in reversed array)
  // 
  // Reversed array: [last, ..., first]
  // To show first item at start: position at -(length-1)*100vh moves last item to 0vh
  // To show last item at end: position at 0vh shows first item in reversed array (which is last)
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div 
      className="h-screen overflow-hidden sticky top-0 w-24 md:w-full" 
      style={{ 
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        isolation: 'isolate'
      }}
    >
      <motion.div 
        style={{ 
          top, 
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} 
        className="absolute left-0 right-0"
      >
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              display: 'block'
            }}
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;

