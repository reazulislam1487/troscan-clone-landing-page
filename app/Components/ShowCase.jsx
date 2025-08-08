// //

// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// const images = [
//   "/showCase/image01.png",
//   "/showCase/image02.png",
//   "/showCase/image03.png",
//   "/showCase/image04.png",
//   "/showCase/image05.png",
//   "/showCase/image06.png",
// ];

// // Final spread positions
// const finalX = [-400, 0, 400, -400, 0, 400];
// const finalY = [-150, -200, -150, 150, 250, 150];

// // Start positions (clustered center)
// const initialX = [-80, -20, 10, -130, 60, 0];
// const initialY = [-40, -100, 100, -10, 0, 0];

// export default function Products() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Spread animation for images
//   const spreadRange = [0, 0.2];
//   const spreadX = initialX.map((startX, i) =>
//     useTransform(scrollYProgress, spreadRange, [startX, finalX[i]])
//   );
//   const spreadY = initialY.map((startY, i) =>
//     useTransform(scrollYProgress, spreadRange, [startY, finalY[i]])
//   );

//   // Text animation (fade in, scale up, move up)
//   const textOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
//   const textScale = useTransform(scrollYProgress, [0.2, 0.35], [0.9, 1]);
//   const textY = useTransform(scrollYProgress, [0.2, 0.35], [10, 0]); // ↓10px → ↑0px

//   return (
//     <section ref={ref} className="relative h-[250vh] py-50">
//       {/* Sticky container */}
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-visible">
//         <div className="relative w-full h-full flex items-center justify-center">
//           {images.map((img, i) => (
//             <motion.div
//               key={i}
//               style={{ x: spreadX[i], y: spreadY[i] }}
//               className="absolute rounded-md"
//             >
//               <Image
//                 src={img}
//                 alt={`Image ${i + 1}`}
//                 width={250}
//                 height={250}
//                 className="object-cover rounded-md shadow-lg"
//               />
//             </motion.div>
//           ))}

//           {/* Center Text */}
//           <motion.div
//             style={{
//               opacity: textOpacity,
//               scale: textScale,
//               y: textY,
//             }}
//             className="absolute inset-0 flex items-center pt-20 justify-center px-6"
//           >
//             <p className="max-w-xl text-center text-amber-900 text-2xl md:text-4xl font-medium">
//               Transforming spaces with style, through Troscán's exquisite design
//               expertise.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
const mobileFinalX = [-150, 0, 150, -150, 0, 150];
const mobileFinalY = [-80, -100, -80, 80, 120, 80];

// Start positions (clustered center)
const initialX = [-80, -20, 10, -130, 60, 0];
const initialY = [-40, -100, 100, -10, 0, 0];

export default function Products() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size once component mounts and on resize
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint = 768px
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Use mobile or desktop final positions based on screen size
  const finalX = isMobile ? mobileFinalX : desktopFinalX;
  const finalY = isMobile ? mobileFinalY : desktopFinalY;

  // Spread animation for images
  const spreadRange = [0, 0.2];
  const spreadX = initialX.map((startX, i) =>
    useTransform(scrollYProgress, spreadRange, [startX, finalX[i]])
  );
  const spreadY = initialY.map((startY, i) =>
    useTransform(scrollYProgress, spreadRange, [startY, finalY[i]])
  );

  // Text animation (fade in, scale up, move up)
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.35], [0.9, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.35], [10, 0]); // ↓10px → ↑0px

  return (
    <section ref={ref} className="relative h-[250vh] py-50">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-visible">
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
                className="object-cover rounded-md shadow-lg w-24 h-24 sm:w-48 sm:h-48 md:w-60 md:h-60"
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
