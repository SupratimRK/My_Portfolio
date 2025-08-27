import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "@/styles";
import { SectionWrapper } from "@/hooks";
import { fadeIn, textVariant } from "@/utils/motion";
import { Email } from "@/constants";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = import.meta.env.VITE_SEVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Ritam Saha",
                    from_email: form.email,
                    to_email: Email,
                    message: form.message,
                },
                PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible.");
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                alert("Something went wrong. Please try again.");
            });
    };

    return (
        <div className="relative px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white">
            
            <div className="absolute top-0 left-0 w-72 h-72 bg-navy-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>

            <motion.div variants={textVariant(0.1)} className="relative z-10 text-center">
                <p className={`${styles.sectionSubText} text-navy-600`}>Get in touch</p>
                <h2 className={`${styles.sectionHeadText} text-navy-900`}>Contact.</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 relative z-10 max-w-6xl mx-auto">
                
                <motion.div
                    variants={fadeIn("right", "", 0.2, 1)}
                    className="flex flex-col space-y-6"
                >
                    <h3 className="text-2xl font-bold text-navy-900">Let's Connect</h3>
                    <p className="text-navy-700 text-lg leading-relaxed">
                        I'm currently available for freelance work or full-time positions.
                        Drop me a line if you'd like to work together!
                    </p>
                    
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center border border-navy-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-navy-900 font-medium">Email</h4>
                                <p className="text-navy-600">{Email}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center border border-navy-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-navy-900 font-medium">Location</h4>
                                <p className="text-navy-600">Kolkata, West Bengal, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                
                <motion.div
                    variants={fadeIn("left", "", 0.2, 1)}
                    className="bg-white/95 p-8 rounded-2xl backdrop-blur-lg shadow-xl border border-navy-200"
                >
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-8"
                    >
                        <label className="flex flex-col">
                            <span className="text-navy-900 font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="bg-navy-50 py-4 px-6 placeholder:text-navy-400 text-navy-900 rounded-lg outline-none border border-navy-200 font-medium transition-all duration-300 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-navy-900 font-medium mb-4">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className="bg-navy-50 py-4 px-6 placeholder:text-navy-400 text-navy-900 rounded-lg outline-none border border-navy-200 font-medium transition-all duration-300 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-navy-900 font-medium mb-4">Your Message</span>
                            <textarea
                                rows="7"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to say?"
                                className="bg-navy-50 py-4 px-6 placeholder:text-navy-400 text-navy-900 rounded-lg outline-none border border-navy-200 font-medium resize-none transition-all duration-300 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-navy-600 hover:bg-navy-700 py-3 px-8 outline-none w-fit text-white font-bold shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                                    Sending...
                                </div>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact"); 