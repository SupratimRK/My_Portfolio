import { home_page_text, socialsData, words } from "@/constants";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from 'next/image'

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const newWordDelay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < words[wordIndex].length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === words[wordIndex].length) {
        setTimeout(() => setIsDeleting(true), newWordDelay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="relative w-full min-h-[calc(100vh-40px)] mx-auto bg-gradient-to-br from-slate-50 to-blue-50 text-navy-900 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-4 top-1/4 w-72 h-72 bg-navy-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -right-4 top-1/4 w-72 h-72 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-slate-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start space-y-4 sm:space-y-6 max-w-2xl order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-7xl font-bold animate-fadeIn text-navy-900">
              Hi, I&apos;m <span className="text-navy-600 hover:text-navy-700 transition-colors">Ritam</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-navy-800">
              I&apos;m a <span className="border-r-2 border-navy-600 text-navy-600 typing-text">{words[wordIndex].substring(0, charIndex)}</span>
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-navy-700 hover:text-navy-800 transition-colors">
              {home_page_text}
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 my-2"
            >
              {socialsData.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="relative group w-14 h-14 flex justify-center items-center rounded-full overflow-hidden border-2 border-navy-600"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-navy-400 to-navy-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative flex justify-center items-center w-full h-full bg-white/90 rounded-full backdrop-blur-sm border-4 border-transparent group-hover:border-navy-600 transition-all duration-300">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-navy-700 group-hover:text-navy-900 transition-colors"
                    >
                      <i className={social.icon}></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-full px-6 py-3 transition-colors shadow-lg"
              >
                Hire Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="border-2 border-navy-600 hover:bg-navy-600 hover:text-white text-navy-600 font-semibold rounded-full px-6 py-3 transition-all"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative group"
          >
            <div className="absolute inset-5 bg-gradient-to-r from-navy-300/20 to-blue-300/20 rounded-full blur-2xl transform scale-110 
              group-hover:from-navy-400/30 group-hover:to-blue-400/30 group-hover:blur-3xl transition-all duration-300" />
            
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
              className="tilt-container"
            >
              <motion.div whileHover={{ scale: 1.03 }}>
                <Image
                  src="/My_pic.jpg"
                  alt="My Picture"
                  width={320}
                  height={320}
                  className="relative rounded-full border-4 border-navy-300/40 shadow-xl hover:scale-105 transition-all duration-300 group-hover:border-navy-400/60 group-hover:shadow-navy-300/30 group-hover:shadow-2xl"
                />
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
