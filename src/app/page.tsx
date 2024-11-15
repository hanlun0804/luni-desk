"use client"

import React, { useState, useEffect, FC } from 'react';
import Desk from "@/components/scenes/Desk";
import Navbar from '@/components/organisms/Navbar';
import { AnimatePresence, motion } from "framer-motion";
import { init } from 'next/dist/compiled/webpack/webpack';
import Button from '@/components/atoms/Button';
import { IconArrowNarrowRight } from '@tabler/icons-react';

export default function Home() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [hoveredLabel, setHoveredLabel] = useState<string | undefined>(undefined);

    type HeroContentProps = {
        text: string | undefined
    }

    type DescribingTextProps = {
        text: string | undefined
    }

    useEffect(() => {
        const checkScreenSize = () => {
            if (typeof window !== 'undefined') { 
                setIsLargeScreen(window.innerWidth >= 768);
            }
        };

        checkScreenSize(); 

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkScreenSize, 150);
        };

        let timeoutId: NodeJS.Timeout;
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    const DescribingText: FC<DescribingTextProps> = ({ text }) => {
        return (
            <motion.h2 className='relative block overflow-hidden whitespace-nowrap text-2xl mt-2 font-semibold'>
                <AnimatePresence mode="wait">
                    {text && (
                        <motion.div
                            key={text} // This key allows AnimatePresence to detect changes
                            initial={{ y: 30 }} // Start below with 0 opacity
                            animate={{ y: 0 }} // Animate into view
                            exit={{ y: -30}} // Exit by moving up and fading out
                            transition={{ duration: 0.5 }}
                        >
                            {text}
                        </motion.div>
                    )}
                    {!text && (
                        <motion.div
                            key="default-text"
                            initial={{ y: 30 }}
                            animate={{ y: 0 }}
                            exit={{ y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            The place where simplicity meets productivity
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.h2>
        );
    } 
    
    const HeroContent: FC<HeroContentProps> = ({ text }) => {
        const [displayedText, setDisplayedText] = useState(text);
        const [opacity, setOpacity] = useState(1);

        useEffect(() => {
            if (text !== displayedText) {
                setOpacity(0); // Start fade-out
                const timeoutId = setTimeout(() => {
                    setDisplayedText(text); // Update the displayed text
                    setOpacity(1); // Start fade-in
                }, 500); // Duration of fade-out

                return () => clearTimeout(timeoutId);
            }
        }, [text, displayedText]);

        return (
            <div className='flex justify-center'>
                <div className='flex flex-col z-10 text-black items-center absolute top-40'>
                    <h1 className='text-5xl font-bold'>LuniDesk - Your Virtual Desk</h1>
                    <DescribingText text={displayedText || "The place where simplicity meets productivity"} />
                    <Button className='bg-black text-white px-4 py-2 rounded-lg mt-4' text='LEARN MORE' icon={<IconArrowNarrowRight stroke={2} />
} />
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow relative">
                <HeroContent text={hoveredLabel} />
                {isLargeScreen && <Desk setHoveredLabel={setHoveredLabel} />}
            </div>
        </div>
    );
}
