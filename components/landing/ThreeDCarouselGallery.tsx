"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel';

export function ThreeDCarouselGallery() {
    const images = [
        "/popups/alaska-mobile-2x.jpg",
        "/popups/california-mobile-2x.jpg",
        "/popups/florida-mobile-2x.jpg",
        "/popups/georgia-mobile-2x.jpg",
        "/popups/hawaii-mobile-2x.jpg",
        "/popups/idaho-mobile-2x.jpg",
        "/popups/illinois-preview-mob.png",
        "/popups/ohio-mobile-2x.jpg",
        "/popups/utah-mobile-2x.jpg",
        "/popups/virginia-mobile-2x.jpg",
        "/popups/arizona-mobile-2x.jpg",
        "/popups/colorado-mobile-2x.jpg"
    ];

    return (
        <section className="relative w-full py-16 desktop:py-24 bg-[#FFFFFF] z-10 flex flex-col items-center justify-center">
            <div className="max-w-[1600px] w-full mx-auto px-4 desktop:px-6 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-12 desktop:mb-16 w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl desktop:text-[56px] font-normal text-emDark leading-[1.1] mb-4 tracking-tight"
                    >
                        Made with EmailMagnet
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg desktop:text-xl text-emTextSecondary max-w-[700px] mx-auto"
                    >
                        Every pop-up is custom-built for your brand. No templates, no guesswork—just conversion-optimized designs.
                    </motion.p>
                </div>

                {/* 3D Carousel */}
                <div className="w-full flex-grow flex items-center justify-center">
                    <ThreeDPhotoCarousel images={images} />
                </div>

            </div>
        </section>
    );
}
