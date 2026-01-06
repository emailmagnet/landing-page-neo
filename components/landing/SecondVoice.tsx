"use client";

import { motion } from "framer-motion";
import { TrendUp, Lightning, ChatsCircle } from "@phosphor-icons/react";

export function SecondVoice() {
    const cards = [
        {
            text: '"Footwear brands like yours see +3.1% higher conversion with red CTAs."',
            bgClass: "bg-[#0b3b32]", // Deep Green
            textClass: "text-white",
            height: "min-h-[360px] desktop:min-h-[440px]"
        },
        {
            text: '"Multi-step pop-ups outperform single-step by 12% in your category."',
            bgClass: "bg-[#e3dfff]", // Soft Purple/Lavender like Wix ref
            textClass: "text-[#161616]",
            height: "min-h-[360px] desktop:min-h-[440px]"
        },
        {
            text: '"Urgency-based incentives convert better for first-time visitors."',
            bgClass: "bg-[#d4e7d8]", // Soft Green/Sage like Wix ref
            textClass: "text-[#0b3b32]", // Dark green text for contrast
            height: "min-h-[360px] desktop:min-h-[440px]"
        }
    ];

    return (
        <section className="relative w-full py-16 desktop:py-24 bg-transparent z-10">
            <div className="max-w-[1600px] mx-auto px-4 desktop:px-6">

                {/* Header Content */}
                <div className="flex flex-col desktop:flex-row desktop:justify-between mb-16 desktop:mb-24 gap-8 desktop:gap-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl desktop:text-[64px] font-normal text-emDark leading-[1.1] tracking-tight max-w-[800px]"
                    >
                        Not Just AI Design — <br />
                        AI That Explains Why It Converts
                    </motion.h2>

                    <div className="flex flex-col justify-end max-w-[500px]">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg desktop:text-xl text-emTextSecondary leading-relaxed mb-6"
                        >
                            Every pop-up EmailMagnet creates comes with a "Second Voice" — an AI conversion expert that explains why each design choice was made.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg desktop:text-xl font-medium text-emDark leading-relaxed"
                        >
                            It's like having the world's best CRO expert reviewing your pop-up — instantly.
                        </motion.p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 desktop:gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className={`${card.bgClass} rounded-[32px] p-8 desktop:p-12 flex flex-col justify-end ${card.height} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}
                        >
                            <h3 className={`text-2xl desktop:text-4xl font-normal leading-tight ${card.textClass}`}>
                                {card.text}
                            </h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
