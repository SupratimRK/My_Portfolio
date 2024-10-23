import { socialsData, words } from "@/constants";
import React, { useEffect, useState } from "react";

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
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section className="relative w-full min-h-screen flex mx-auto items-center justify-center px-[12%] pt-24 lg:pt-5 bg-black text-white" id="home">
      <div className="flex flex-col lg:flex-row lg:gap-12 gap-20  items-center justify-between w-full">
        
        <div className="flex justify-center lg:self-start order-1 lg:order-2">
          <img src="My_pic.jpg" alt="My Picture" className="img_pic w-96" />
        </div>

        <div className="flex flex-col items-start space-y-4 max-w-2xl order-2 lg:order-1">
          <h1 className="text-7xl font-bold">Hi, It's <span className="text-cyan-300">Ritam</span></h1>
          <h3 className="text-3xl font-semibold">
            I'm a <span className="border-r-2 border-cyan-300 text-cyan-300 typing-text">{words[wordIndex].substring(0, charIndex)}</span>
          </h3>
          <p className="text-lg leading-relaxed text-secondary">
            I'm a passionate second-year Computer Science Engineering student at Bengal Institute of Technology, where I lead the DSA and CP domain at Google Developers Group on Campus. My tech journey revolves around solving complex problems and turning algorithms into my personal playground. Whether it's coding in C, Python, or Java, I love the thrill of chasing pointers 🧭, speaking the language of binary trees 🌳, and brewing solutions 💡.
          </p>
          <div className="flex my-2 gap-3">
            {socialsData.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icons-a"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-7">
            <a href="#" className="btn btns px-4 py-2 mt-6">Hire</a>
            <a href="#contact" className="btns border-[2px] hover:bg-cyan-300 border-cyan-300 rounded-full px-4 py-2 mt-6">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
