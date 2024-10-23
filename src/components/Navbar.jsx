import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary shadow-md bg-bg_color" : "bg-transparent"
      } transition-colors duration-300 ease-in-out`}
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
            className="w-9 h-9 object- mr-5"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="text-white text-[18px] font-bold cursor-pointer flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="logo text-3xl">Ritam Saha</span>
          </motion.p>
        </Link>

        {/* Desktop Navbar Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className={`${
                active === nav.title ? "text-cyan-400" : "text-white"
              } hover:text-cyan-400 text-[18px] font-medium cursor-pointer relative group`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.id}`}
                className="transition duration-300 ease-in-out"
              >
                {nav.title}
              </a>
              
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-cyan-300 w-full"
                initial={{ width: 0 }}
                animate={{ width: active === nav.title ? "100%" : "0" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
            </motion.li>
          ))}
        </ul>

        {/* Mobile Navbar Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: toggle ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-t to-blue-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-cyan-300" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    className="hover:bg-blue-300 transition duration-300 ease-in-out"
                  >
                    {nav.title}
                  </a>
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-cyan-500 w-full"
                    initial={{ width: 0 }}
                    animate={{ width: active === nav.title ? "100%" : "0" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
