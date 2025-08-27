import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/styles';
import { SectionWrapper } from '@/hooks';
import { fadeIn, textVariant } from '@/utils/motion';

const EducationCard = ({ degree, institution, duration, gpa, description, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-navy-200 hover:border-navy-400 transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    <div className="relative">
      <div className="absolute -left-3 top-2 w-6 h-6 bg-navy-600 rounded-full border-4 border-white"></div>
      <div className="pl-8">
        <h3 className="text-navy-900 text-xl font-bold mb-2">{degree}</h3>
        <h4 className="text-navy-700 text-lg font-semibold mb-1">{institution}</h4>
        <div className="flex items-center gap-4 mb-3">
          <p className="text-navy-600 text-sm font-medium">{duration}</p>
          {gpa && (
            <span className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-sm font-semibold">
              {gpa}
            </span>
          )}
        </div>
        <p className="text-navy-700 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Techno Bengal Institute of Technology",
      duration: "2023 - 2027 (Expected)",
      gpa: "7.6 GPA",
      description: "Currently in 3rd year, pursuing B.Tech with focus on software development, algorithms, and emerging technologies. Won silver medal in Code-Ardor competition during college Tech-fest. Active in coding communities and competitive programming."
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Bidhannagar Govt. High School",
      duration: "2021 - 2023",
      gpa: "84.2%",
      description: "Completed Higher Secondary examination with strong performance in Physics, Chemistry, Mathematics, and Computer Science."
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "Bidhannagar Municipal School",
      duration: "2021",
      gpa: "91.8%",
      description: "Completed Madhyamik examination with excellent results, establishing a strong foundation in core subjects."
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-slate-50 py-16">
      <motion.div variants={textVariant(0.1)} className="text-center">
        <p className={`${styles.sectionSubText} text-navy-600`}>Academic Journey</p>
        <h2 className={`${styles.sectionHeadText} text-navy-900`}>Education.</h2>
      </motion.div>

      <div className="mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-600 to-navy-400"></div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} index={index} {...edu} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Education, "education");
