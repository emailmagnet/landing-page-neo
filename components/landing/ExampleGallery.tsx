"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type GalleryImage = {
    src: string;
    alt: string;
}

type GallerySection = {
    type?: string;
    images: GalleryImage[];
}

import { useFeatureFlagVariantKey } from 'posthog-js/react';

export function ExampleGallery() {
    // A/B Test Logic
    const variant = useFeatureFlagVariantKey('example-gallery-vs-none');

    // Debug logs to verify experiment is running
    if (variant) {
        console.log('🖼️ Gallery Experiment:', variant);
    }

    // Hide component if user is in the 'test' group (No Gallery)
    if (variant === 'test') {
        return null;
    }

    const sections: GallerySection[] = [
        {
            images: [
                { src: '/popups/alaska-mobile-2x.jpg', alt: 'Alaska Popup' },
                { src: '/popups/california-mobile-2x.jpg', alt: 'California Popup' },
                { src: '/popups/florida-mobile-2x.jpg', alt: 'Florida Popup' },
            ],
            type: 'grid',
        },
        {
            images: [
                { src: '/popups/georgia-mobile-2x.jpg', alt: 'Georgia Popup' },
                { src: '/popups/hawaii-mobile-2x.jpg', alt: 'Hawaii Popup' },
                { src: '/popups/idaho-mobile-2x.jpg', alt: 'Idaho Popup' },
            ],
            type: 'grid',
        },
        {
            images: [
                { src: '/popups/illinois-preview-mob.png', alt: 'Illinois Popup' },
                { src: '/popups/ohio-mobile-2x.jpg', alt: 'Ohio Popup' },
                { src: '/popups/utah-mobile-2x.jpg', alt: 'Utah Popup' },
            ],
            type: 'grid',
        },
        {
            images: [
                { src: '/popups/virginia-mobile-2x.jpg', alt: 'Virginia Popup' },
                { src: '/popups/arizona-mobile-2x.jpg', alt: 'Arizona Popup' },
                { src: '/popups/colorado-mobile-2x.jpg', alt: 'Colorado Popup' },
            ],
            type: 'grid',
        },
    ];


    return (
        <section className="relative w-full py-16 desktop:py-24 bg-[#FFFFFF] z-10">
            <div className="max-w-[1600px] mx-auto px-4 desktop:px-6">

                {/* Header */}
                <div className="text-center mb-12 desktop:mb-16">
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

                {/* Gallery Grid from @ss-blocks/gallery-component-01 (adapted) */}
                <div className='grid gap-6 md:grid-cols-4'>
                    {sections.map((section, sectionIndex) => (
                        <motion.div
                            key={sectionIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                            className={cn('flex flex-col gap-6')}
                        >
                            {section.images.map((image, imageIndex) => (
                                <motion.div
                                    key={imageIndex}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className='w-full h-auto object-cover rounded-2xl scale-110'
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
