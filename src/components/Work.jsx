import React from 'react'
import { motion } from "framer-motion";
import { styles } from '@/styles';
import { SectionWrapper } from '@/hooks';
import { textVariant } from '@/utils/motion';
import { Work_page_text } from '@/constants';

function Work() {
    return (
        <>
            <motion.div variants={textVariant(0.2)} className="text-center">
                <p className={`${styles.sectionSubText} text-teal-400`}>
                    My Journey So Far
                </p>
                <h2 className={`${styles.sectionHeadText} text-white`}>
                    Work Experience
                </h2>
                <motion.p
                    className="mt-5 text-gray-400 text-[16px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {Work_page_text}
                </motion.p>
            </motion.div>
        </>
    )
}

export default SectionWrapper(Work, "work");
