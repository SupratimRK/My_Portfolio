import React from "react";
import { motion } from "framer-motion";
import { styles } from '@/styles';
import { services } from '@/constants';
import { SectionWrapper } from '@/hooks';
import { fadeIn, textVariant } from '@/utils/motion';
import ServiceCard from "./ServiceCard";


function About() {
    return (
        <div className="lg:px-2 px-10 pt-40 lg:pt-0">
            <motion.div variants={textVariant(0.5)}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I am currently pursuing my Bachelor's degree, where I am deeply passionate about software development, web development, and mobile app development. My interests also extend to the exciting fields of cybersecurity and Web3 technologies. I am continuously exploring new ways to enhance my skills and stay at the forefront of technological advancements. Whether it's building responsive websites, developing secure applications, or delving into decentralized solutions, I am committed to expanding my expertise and contributing to innovative projects. My goal is to become a versatile developer who can navigate both traditional and cutting-edge technologies to create impactful solutions.
            </motion.p>

            <div className="flex justify-center items-center mt-6">
                <h2 className="text-white text-[40px] font-bold text-center">Service</h2>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

        </div>
    )
}

export default SectionWrapper(About, "about");
