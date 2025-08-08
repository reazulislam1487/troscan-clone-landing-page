// "use client";
// import React, { useState } from "react";
// import { X, Menu } from "lucide-react";
// import { motion } from "framer-motion";
// const Header = () => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const menuItems = [
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "News", href: "#news" },
//   ];

//   return (
//     <>
//       {/* Top Navigation */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="fixed top-5 left-1/2 transform -translate-x-1/2 z-500 w-[90%] max-w-[700px] animate-fade-in"
//         style={{ animationDelay: "0.2s" }}
//       >
//         <nav className="flex items-center justify-between px-1 py-1 bg-[#F8EDE3] text-[#8D493A] rounded-md shadow-lg backdrop-blur-sm">
//           <h1 className="font-extrabold font-[Archivo] text-xl ml-4 tracking-wide">
//             Troscán
//           </h1>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 font-semibold items-center">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href={item.href}
//                   className="hover:text-[#71372a]s transition-colors duration-200 cursor-pointer"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <a href="#contact" className="hidden md:inline-block">
//             <button className="bg-[#8d493a] text-[#F8EDE3] font-[Archivo] rounded-md text-md font-bold px-7 py-[14px] hover:bg-[#8D493A] transition-all duration-200 transform cursor-pointer">
//               Contact Us
//             </button>
//           </a>

//           {/* Mobile Hamburger Icon */}
//           <button
//             className="md:hidden bg-[#8D493A] text-[#F8EDE3] p-2 rounded hover:bg-[#8d493a] transition-colors duration-200"
//             onClick={() => setIsMobileOpen(true)}
//           >
//             {/* <Menu size={20} /> */}
//             {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </nav>
//       </motion.div>

//       {/* Mobile Menu Overlay */}
//       {isMobileOpen && (
//         <div
//           className="fixed inset-0 z-240 bg-white max-h-1/3 p-6 animate-fade-in"
//           style={{
//             animation: "fadeIn 0.3s ease-out",
//             backdropFilter: "blur(8px)",
//           }}
//         >
//           {/* Close button */}
//           <div className="flex justify-between items-start">
//             <h1 className="font-bold text-xl text-[#8D493A] tracking-wide">
//               Troscán
//             </h1>
//             <button
//               onClick={() => setIsMobileOpen(false)}
//               className="bg-[#8D493A] text-white p-2 rounded hover:bg-[#71372a] transition-colors duration-200"
//             >
//               <X size={18} />
//             </button>
//           </div>

//           {/* Menu links */}
//           <ul className="mt-6  text-center text-[#8D493A] font-semibold text-sm">
//             {menuItems.map((item, index) => (
//               <li
//                 key={item.name}
//                 style={{
//                   animation: `slideInUp 0.4s ease-out ${
//                     (index + 1) * 0.1
//                   }s both`,
//                 }}
//               >
//                 <a
//                   href={item.href}
//                   onClick={() => setIsMobileOpen(false)}
//                   className="block py-2 hover:text-[#71372a] transition-colors duration-200 cursor-pointer"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Contact Button */}
//           <div
//             className="mt-6 flex justify-center"
//             style={{ animation: "slideInUp 0.4s ease-out 0.5s both" }}
//           >
//             <a href="#contact">
//               <button
//                 className="bg-[#8D493A]  text-[#F8EDE3] rounded-md text-md font-bold px-6 py-3 hover:bg-amber-800 transition-all duration-200 transform shadow-md"
//                 onClick={() => setIsMobileOpen(false)}
//               >
//                 Contact us
//               </button>
//             </a>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fadeIn 0.8s ease-out;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Projects", "News"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed md:w-7/12 mx-auto left-0 right-0 z-50 px-4 py-2  w-full flex flex-col items-center">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl bg-gradient-to-br from-orange-50 to-amber-50 rounded-md shadow-2xl px-2 py-1"
      >
        {/* Top bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#7a3f2e] tracking-wide">
            Troscán
          </div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex space-x-8 text-[#7a3f2e] font-bold text-sm">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-[#5a2e22] transition duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Contact + Toggle */}
          <div className="flex items-center">
            {/* Contact button (desktop) */}
            <button className="bg-[#8d493a] text-[#F8EDE3] hidden md:block rounded-md text-md font-bold px-7 py-[14px] hover:bg-[#8D493A] transition-all duration-200 transform cursor-pointer">
              {" "}
              Contact us
            </button>

            {/* Menu toggle (mobile) */}
            <div className="md:hidden flex items-center justify-center">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-amber-900 text-white p-2 rounded-sm focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden flex flex-col items-center mt-4 space-y-4 overflow-hidden"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-[#7a3f2e] font-semibold text-lg"
                >
                  {item}
                </motion.div>
              ))}

              {/* Contact us button inside dropdown */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <button className="bg-[#7a3f2e] text-white font-medium px-5 py-2.5 rounded-lg border-2 border-white shadow hover:bg-amber-800 transition">
                  Contact us
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
