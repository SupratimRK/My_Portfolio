import React from "react";
import { motion } from "framer-motion";
import { styles } from '@/styles';
import { about_page_text, services } from '@/constants';
import { SectionWrapper } from '@/hooks';
import { fadeIn, textVariant } from '@/utils/motion';
import ServiceCard from "./ServiceCard";

function About() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <motion.div variants={textVariant(0.1)}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p 
                variants={fadeIn("", "", 0.1, 1)} 
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                {about_page_text}
            </motion.p>

            <div className="flex justify-center items-center mt-12 sm:mt-16">
                <h2 className="text-white text-[32px] sm:text-[40px] font-bold text-center">
                    Service
                </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-0 md:mx-32 lg:mx-0 sm:gap-6 md:gap-10 lg:gap-6 max-w-7xl">
                {services.map((service, index) => (
                    <div className="w-full sm:max-w-[320px] mx-auto">
                        <ServiceCard key={service.title} index={index} {...service} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(About, "about");
