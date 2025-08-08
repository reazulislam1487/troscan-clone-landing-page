"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function GetInTouch() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const boxY = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] w-full font-[archivo]"
    >
      {/* Sticky full-height background image */}
      <div className="sticky top-0 h-screen w-full z-0">
        <Image
          src="/get.jpg"
          alt="Room"
          fill
          className="object-cover"
          priority
        />
      </div>

      <motion.div
        style={{ y: boxY }}
        className="sticky top-1/3 z-10 flex justify-center px-4 sm:px-6"
      >
        <div className="bg-[#f4e9e4] px-6 sm:px-12 md:px-20 lg:px-32 py-8 sm:py-12 md:py-16 rounded-xl shadow-lg w-full sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto text-center -translate-y-1/2">
          <p className="text-[#783f2d] text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-6">
            Ready to reimagine your space? Connect with us at Troscán to bring
            your vision to life with our expertise in design and decoration.
          </p>
          <button className="bg-[#8d493a] hover:bg-amber-800 transition-all duration-400 transform text-white font-semibold text-sm sm:text-xl px-6 sm:px-6 py-3 sm:py-3.5 cursor-pointer rounded-md">
            Get in Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
}
