"use client";

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative h-screen w-full overflow-hidden font-[archivo]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/banner1.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 mt-4 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white text-[40px] md:text-8xl font-medium leading-tight"
        >
          Timeless Comfort &<br /> Endless Luxury
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full sm:w-auto"
        >
          <motion.a
            href="#vision"
            className="bg-white text-[#693728] px-7 py-3 rounded-md font-bold shadow hover:bg-[#F8EDE3] w-full sm:w-auto text-center"
          >
            Our Vision
          </motion.a>
          <motion.a
            href="#expertise"
            className="border border-white text-white px-7 py-3 rounded-md font-bold hover:bg-white hover:text-[#693728] transition w-full sm:w-auto text-center"
          >
            Explore Expertise
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
