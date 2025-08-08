"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  "/showCase/image01.png",
  "/showCase/image02.png",
  "/showCase/image03.png",
  "/showCase/image04.png",
  "/showCase/image05.png",
  "/showCase/image06.png",
];

// Desktop positions (spread wider)
const desktopFinalX = [-400, 0, 400, -400, 0, 400];
const desktopFinalY = [-150, -200, -150, 150, 250, 150];

// Mobile positions (more compact)
const mobileFinalX = [-100, 0, 100, -100, 0, 100];
const mobileFinalY = [-60, -80, -60, 60, 90, 60];

// Start positions (clustered center)
const initialX = [-80, -20, 10, -130, 60, 0];
const initialY = [-40, -100, 100, -10, 0, 0];

export default function Products() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and update isMobile state
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Choose spread positions based on device
  const finalX = isMobile ? mobileFinalX : desktopFinalX;
  const finalY = isMobile ? mobileFinalY : desktopFinalY;

  const spreadRange = [0, 0.2];
  const spreadX = initialX.map((startX, i) =>
    useTransform(scrollYProgress, spreadRange, [startX, finalX[i]])
  );
  const spreadY = initialY.map((startY, i) =>
    useTransform(scrollYProgress, spreadRange, [startY, finalY[i]])
  );

  // Text animations
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.35], [0.9, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.35], [10, 0]);

  return (
    <section ref={ref} className="relative h-[250vh] py-50 font-[archivo]">
      {/* Sticky container with overflow-x-hidden to prevent horizontal scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-x-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((img, i) => (
            <motion.div
              key={i}
              style={{ x: spreadX[i], y: spreadY[i] }}
              className="absolute rounded-md"
            >
              <Image
                src={img}
                alt={`Image ${i + 1}`}
                width={250}
                height={250}
                className="object-cover rounded-md shadow-lg w-20 h-20 sm:w-36 sm:h-36 md:w-60 md:h-60"
              />
            </motion.div>
          ))}

          {/* Center Text */}
          <motion.div
            style={{
              opacity: textOpacity,
              scale: textScale,
              y: textY,
            }}
            className="absolute inset-0 flex items-center pt-20 justify-center px-6"
          >
            <p className="max-w-xl text-center text-amber-900 text-2xl md:text-4xl font-medium">
              Transforming spaces with style, through Troscán's exquisite design
              expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
