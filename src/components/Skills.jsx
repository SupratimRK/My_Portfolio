import React from 'react'
import { motion } from 'framer-motion'
import { techStack } from '@/constants'

function Skills() {
    return (
        <div className='flex flex-wrap justify-center lg:px-40 md:px-12 px-14 pb-20'>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8'
            >
                {techStack.map((skill, index) => (
                    <motion.div
                        className='aspect-square w-[85px] h-[85px] bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-gray-700/50 transition-colors group'
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            className='w-14 h-14 object-contain group-hover:scale-110 transition-transform'
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills
