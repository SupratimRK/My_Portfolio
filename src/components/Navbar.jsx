import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling function with offset for fixed navbar
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ease-in-out
        ${scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy-100/20 border-b border-navy-100" 
          : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            src='/logo.png'
            alt="logo"
            className="w-9 h-9 object-contain mr-5"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="text-navy-900 text-[18px] font-bold cursor-pointer flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="logo text-3xl font-bold text-slate-700 hover:text-navy-900 transition-colors duration-300" style={{ color: '#1e293b' }}>
              Ritam Saha
            </span>
          </motion.p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className={`${
                active === nav.title 
                  ? "text-navy-800" 
                  : "text-navy-600"
              } text-[18px] font-medium cursor-pointer relative group`}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setActive(nav.title);
                scrollToSection(nav.id);
              }}
            >
              <span
                className="transition duration-300 ease-in-out hover:text-navy-800 relative"
              >
                {nav.title}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-navy-600 to-navy-800 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-navy-100 to-navy-200 flex items-center justify-center cursor-pointer border border-navy-300"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[23px] h-[23px] object-contain"
            />
          </motion.div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white/95 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-navy-200 shadow-xl"
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((nav) => (
                    <motion.li
                      key={nav.id}
                      whileHover={{ x: 5 }}
                      className={`font-medium cursor-pointer text-[16px] w-full
                        ${active === nav.title 
                          ? "text-navy-800" 
                          : "text-navy-600"
                        }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                        scrollToSection(nav.id);
                      }}
                    >
                      <span
                        className="block w-full p-2 rounded-lg hover:bg-navy-50 transition-all duration-300"
                      >
                        {nav.title}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
