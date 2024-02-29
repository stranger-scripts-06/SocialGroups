'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Hero = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const scrollToSection = () => {
        const section = document.getElementById('technovanza');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <div className="background-video">
                <video autoPlay playsInline muted loop preload="auto" className="video">
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <div className="content">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold mb-10"
                        >
                            VJTI Social Group
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="scroll-down"
                            onClick={scrollToSection}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
