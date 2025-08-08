"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Zoom-out effect on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#F8EDE3] overflow-hidden font-[archivo]"
    >
      <div className="max-w-9xl mx-auto px-4 py-16 md:pt-56 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-[#8D493A] rounded-full"></div>
              <span className="text-[#8D493A] font-medium text-sm tracking-wide">
                About us
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-medium">
                <span className="text-[#8D493A] block">Where Spaces</span>
                <span className="text-[#8D493A] block">
                  Inspire, and Design
                </span>
                <span className="text-[#8D493A] block">Comes Alive</span>
              </h1>
            </motion.div>

            <motion.div
              className="space-y-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-[#8D493A] text-md">
                At Troscan, we believe that every space has a story to tell. As
                a premier furniture design and room decorating agency.
              </p>

              <p className="text-[#8D493A] text-md">
                Our expert team blends timeless craftsmanship with innovative
                designs, ensuring each piece and layout reflects your unique
                taste and lifestyle. Whether you're looking to reimagine your
                living room.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <button className="bg-[#8D493A] hover:bg-amber-800 cursor-pointer text-[#F8EDE3] px-7 py-4 rounded-md font-medium text-md transition-all duration-300 shadow-lg hover:shadow-xl">
                More About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image with Scroll Zoom Effect */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div className="relative overflow-hidden rounded-md w-full h-[485px] cursor-pointer shadow-lg">
              <motion.div
                className="w-full h-full"
                style={{ scale }} // scroll-based zoom
                animate={{ scale: isHovered ? 1.05 : undefined }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/about-image.png"
                  alt="About Section Image"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
