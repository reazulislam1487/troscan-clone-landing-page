import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#8d493a] flex flex-col justify-center px-5 text-white font-[archivo]">
      {/* Brand */}
      <div className="text-center my-20">
        <h1 className=" text-xl font-bold">Troscán</h1>
      </div>

      {/* Navigation Columns */}
      <div className="flex justify-center flex-col sm:flex-row flex-wrap gap-10 md:gap-[100px] mb-18 max-w-3xl mx-auto">
        {/* Column 1 */}
        <div className="text-center">
          <h3 className="text-[#e8d4d0] font-normal mb-4">Sitemap</h3>
          <ul className="">
            <li>
              <a
                href="#about"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="text-center">
          <h3 className="text-[#e8d4d0] font-normal mb-4">Socials</h3>
          <ul className="">
            <li>
              <a
                href="#facebook"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#instagram"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#linkedin"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#twitter"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center">
          <h3 className="text-[#e8d4d0] font-normal mb-4">More</h3>
          <ul className="">
            <li>
              <a
                href="#license"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#grainient"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                Grainient
              </a>
            </li>
            <li>
              <a
                href="#inspirux"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                Inspirux
              </a>
            </li>
            <li>
              <a
                href="#store"
                className="text-white text-xl md:text-3xl font-semibold hover:text-[#e8d4d0]"
              >
                Store
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/40 px-4 md:px-12 lg:px-16 py-8 flex flex-col md:flex-row justify-center items-center text-center">
        <h1 className="text-sm text-center text-white/70 ">
          © 2025, All rights reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
