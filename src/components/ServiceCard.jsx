import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full max-w-[250px] mx-auto">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-[20px] blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-black/90 rounded-[20px] py-8 px-6 min-h-[280px] flex justify-evenly items-center flex-col backdrop-blur-sm">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
