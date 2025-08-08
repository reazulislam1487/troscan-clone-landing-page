"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function News() {
  return (
    <section className="py-16 px-4 md:py-64 md:px-12 lg:px-16 font-[archivo] ">
      {/* Header & Button */}
      <motion.div
        className="max-w-9xl mx-auto mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={headerVariants}>
          <motion.p
            className="text-sm text-[#8d493a] mb-2 flex items-center"
            variants={headerVariants}
          >
            <span className="w-2 h-2 bg-[#7a3f2e] rounded-full mr-2"></span>
            News
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{ color: "#8d493a" }}
            variants={headerVariants}
          >
            Stay Inspired with
            <br />
            Interior Trends
          </motion.h2>
        </motion.div>

        <button className=" px-6 py-3 rounded-md text-white md:mt-23 bg-[#7a3f2e] font-medium shadow-lg cursor-pointer hover:bg-amber-800">
          View All News
        </button>
      </motion.div>

      {/* Articles Grid */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {[1, 2, 3].map((id, index) => (
          <motion.article
            key={id}
            className="group cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.3 * index }}
          >
            {/* Image with zoom on hover only */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }} //
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={`/news/image0${id}.png`}
                  alt={`News ${id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={id === 1}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <p
                className="text-sm flex items-center"
                style={{ color: "#8d493a" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-2"
                  style={{ backgroundColor: "#8d493a" }}
                ></span>
                {id === 1 && "February 5, 2022"}
                {id === 2 && "February 22, 2022"}
                {id === 3 && "January 21, 2023"}
              </p>
              <h3
                className="text-xl md:text-2xl font-light leading-tight group-hover:text-amber-700 transition-colors duration-300"
                style={{ color: "#8d493a" }}
              >
                {id === 1 && "The Art of Minimalist Interiors"}
                {id === 2 && "Timeless Furniture Pieces Every Home Needs"}
                {id === 3 && "Psychology in Interior Design"}
              </h3>
              <p className="text-sm text-[#8d493a] leading-relaxed">
                {id === 1 &&
                  "Less is More: Designing Spaces That Speak Simplicity"}
                {id === 2 && "Building a Home That Never Goes Out of Style"}
                {id === 3 &&
                  "Shaping Emotions Through Thoughtful Color Choices"}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
