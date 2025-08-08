"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  { id: 1, title: "Custom Furniture Design", image: "/services/service-1.png" },
  {
    id: 2,
    title: "Room Decoration & Styling",
    image: "/services/service-2.png",
  },
  {
    id: 3,
    title: "Space Planning & Interior Layout",
    image: "/services/service-3.png",
  },
  {
    id: 4,
    title: "Home Renovations & Remodeling",
    image: "/services/service-4.png",
  },
  { id: 5, title: "Lighting Design", image: "/services/service-5.png" },
  {
    id: 6,
    title: "Virtual Interior Design Consultations",
    image: "/services/service-6.png",
  },
];

export default function Expertise() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="">
      <div className="max-w-9xl mx-auto py-16 px-4 md:py-46 md:px-12 lg:px-16 font-[archivo]">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <motion.div
            className="flex flex-col items-start text-left md:items-center lg:pl-150  text-amber-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Small title */}
            <div className="flex flex-col  w-full  space-x-2 mb-4">
              <div className="flex items-center justify-start space-x-2 mb-4">
                <p className="w-2 h-2 bg-[#8d493a] rounded-full"></p>
                <p className="text-sm font-medium text-[#8d493a]">
                  Our Expertise
                </p>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal leading-tight text-[#8d493a]">
                Selecting the ideal <br />
                elements to elevate <br />
                your space
              </h1>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-end md:pl-90"></div>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16">
          {/* Titles on right */}
          <div className="flex-1  mt-6 sm:mt-10">
            {services.map((item) => (
              <motion.div
                key={item.id}
                className="relative border-b border-[#8d493a]/20 py-3 sm:py-4 px-4 sm:px-6 cursor-pointer group overflow-hidden"
                onHoverStart={() => setActiveItem(item.id)}
                initial={false}
              >
                {/* Background animation element */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-full bg-[#8d493a] origin-bottom"
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: activeItem === item.id ? 1 : 0,
                    transformOrigin: activeItem === item.id ? "bottom" : "top",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                <div className="relative flex items-center z-10 flex-wrap sm:flex-nowrap">
                  <span
                    className={`text-base sm:text-lg font-medium mr-3 sm:mr-4 ${
                      activeItem === item.id ? "text-white" : "text-[#8d493a]"
                    }`}
                  >
                    {item.id.toString().padStart(2, "0")}
                  </span>
                  <motion.p
                    className={`text-lg sm:text-2xl font-medium ${
                      activeItem === item.id ? "text-white" : "text-[#8d493a]"
                    }`}
                    animate={{
                      x: activeItem === item.id ? 8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.p>
                </div>
                {activeItem === item.id && (
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-[#8d493a] z-10"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Image on left */}
          <div className="flex-1 relative h-64 sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeItem}
                className="absolute inset-0"
                initial={{ y: "100%", opacity: 0.8 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-30%", opacity: 0 }}
                transition={{
                  y: {
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    duration: 0.5,
                  },
                  opacity: { duration: 0.4 },
                }}
                style={{ originY: 1 }}
              >
                <img
                  src={services.find((item) => item.id === activeItem).image}
                  alt={services.find((item) => item.id === activeItem).title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
