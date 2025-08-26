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

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ease-in-out
        ${scrolled 
          ? "bg-black/80 backdrop-blur-md shadow-lg shadow-black/5" 
          : "bg-transparent"
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
            className="text-white text-[18px] font-bold cursor-pointer flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="logo text-3xl bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
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
                  ? "text-cyan-400" 
                  : "text-white"
              } text-[18px] font-medium cursor-pointer relative group`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.id}`}
                className="transition duration-300 ease-in-out hover:text-cyan-400 relative"
              >
                {nav.title}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center cursor-pointer"
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
                className="p-6 bg-black/90 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-gray-800"
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((nav) => (
                    <motion.li
                      key={nav.id}
                      whileHover={{ x: 5 }}
                      className={`font-medium cursor-pointer text-[16px] w-full
                        ${active === nav.title 
                          ? "text-cyan-400" 
                          : "text-white"
                        }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a
                        href={`#${nav.id}`}
                        className="block w-full p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                      >
                        {nav.title}
                      </a>
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
