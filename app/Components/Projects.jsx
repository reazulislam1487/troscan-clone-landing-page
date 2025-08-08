// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// const sections = [
//   {
//     id: 1,
//     image:
//       "https://framerusercontent.com/images/h8rMLidvtxgO37bgs0urvbSKFOk.jpeg",
//     title: "Serene Urban Retreat",
//     description: "Where modern comfort meets peaceful sophistication.",
//   },
//   {
//     id: 2,
//     image:
//       "https://framerusercontent.com/images/AkcINRgdRJWagCIMhlfAa6SCpcs.jpeg",
//     title: "Luxurious Coastal Living",
//     description: "Bringing the beauty of the shore into your home.",
//   },
//   {
//     id: 3,
//     image:
//       "https://framerusercontent.com/images/bzAxUIZb76NAbMbbTCNRKvwep8.jpeg",
//     title: "Modern Elegance in Every Room",
//     description: "Redefining spaces with timeless style and innovation.",
//   },
// ];

// const Projects = () => {
//   const containerRef = useRef(null);

//   return (
//     <div ref={containerRef} className="relative">
//       {sections.map((section, index) => {
//         const sectionRef = useRef(null);
//         const { scrollYProgress } = useScroll({
//           target: sectionRef,
//           offset: ["start end", "end start"],
//         });

//         // Image zoom in/out
//         const scale = useTransform(
//           scrollYProgress,
//           [0, 0.5, 1],
//           [1.1, 1, 0.95]
//         );
//         // Image fade in/out
//         const opacity = useTransform(
//           scrollYProgress,
//           [0, 0.3, 0.7, 1],
//           [0, 1, 1, 0]
//         );
//         // Text fade & slide up
//         const textY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
//         const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

//         return (
//           <section
//             key={section.id}
//             ref={sectionRef}
//             className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
//           >
//             {/* Background image */}
//             <motion.div
//               style={{
//                 backgroundImage: `url(${section.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 scale,
//                 opacity,
//               }}
//               className="absolute inset-0"
//             />

//             {/* Overlay */}
//             <motion.div
//               style={{
//                 y: textY,
//                 opacity: textOpacity,
//               }}
//               className="relative z-110  text-white p-8 rounded-xl max-w-xl text-center font-[archivo]"
//             >
//               <h2 className="text-6xl font-bold mb-4">{section.title}</h2>
//               <p className="text-lg mb-6">{section.description}</p>
//               <button className=" text-[#8D493A] bg-[#F8EDE3] rounded-md text-md font-bold px-6 py-3 hover:bg-[#71372a] transition-all duration-200 transform hover:scale-105 shadow-md ">
//                 View Project
//               </button>
//             </motion.div>

//             {/* Dark overlay for readability */}
//             <div className="absolute inset-0 " />
//           </section>
//         );
//       })}
//     </div>
//   );
// };

// export default Projects;

"use client";

function Project({ id, title, subtitle, imageSrc, index, gradient }) {
  return (
    <div
      className="h-screen sticky top-0 w-full overflow-hidden"
      style={{ zIndex: index }} // Higher index = higher z-index = comes on top
    >
      {/* Image Background */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{ background: gradient }}
      />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
        <p className="text-lg md:text-xl tracking-widest text-white/80 mb-8 font-mono">
          {id}
        </p>
        <h2 className="max-w-xl text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-white/90 drop-shadow-sm">
          {subtitle}
        </p>
        <button className="bg-white text-[#8d493a] cursor-pointer px-6 py-3 rounded-md font-medium text-lg shadow-md hover:shadow-xl transition">
          View Project
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="relative">
      <Project
        id="01"
        title="Serene Urban Retreat"
        subtitle="Where modern comfort meets peaceful sophistication."
        imageSrc="/project/image01.png"
        index={0}
        gradient="linear-gradient(to top, rgba(164, 172, 134, 0.85), transparent)"
      />

      <Project
        id="02"
        title="Luxurious Coastal Living"
        subtitle="Bringing the beauty of the shore into your home."
        imageSrc="/project/image02.png"
        index={1}
        gradient="linear-gradient(to top, rgba(100, 0, 0, 0.6), transparent)"
      />

      <Project
        id="03"
        title="Modern Elegance in Every Room"
        subtitle="Redefining spaces with timeless style and innovation."
        imageSrc="/project/image03.png"
        index={2}
        gradient="linear-gradient(to top, rgba(65, 72, 51, 0.85), transparent)"
      />
    </div>
  );
}
