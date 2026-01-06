"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TrustBar() {
    const brands = [
        { name: "True Classic", logo: "/images/logo/True_Classic.svg" },
        { name: "Allbirds", logo: "/images/logo/allbirds.svg" },
        { name: "Blume", logo: "/images/logo/blume.svg" },
        { name: "TUSHY", logo: "/images/logo/tushy.png" },
        { name: "Luvlink", logo: "/images/logo/luvlink logo.svg" },
        { name: "Live Sozy", logo: "/images/logo/LiveSozy.svg" },
        { name: "Drifthook", logo: "/images/logo/Drifthook.svg" },
        { name: "Soapbox", logo: "/images/logo/Soapbox.png" },
        { name: "Batch", logo: "/images/logo/hellobatch.svg" },
        { name: "Patrick Ta", logo: "/images/logo/PatrickTa.png" },
        { name: "Gymshark", logo: "/images/logo/Gymshark.svg" },
        { name: "MVMT", logo: "/images/logo/MVMT.svg" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative w-full py-16 desktop:py-24 z-10">
            {/* Blurred background overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,white_20%,white_80%,transparent_100%)] pointer-events-none -z-10" />

            <div className="max-w-[1600px] mx-auto px-4 desktop:px-6 relative">

                {/* Header Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 desktop:mb-16"
                >
                    <h2 className="text-2xl desktop:text-4xl font-normal text-emDark mb-4 tracking-tight max-w-[800px] mx-auto leading-tight">
                        Trained on patterns from the world's highest-converting eCommerce brands
                    </h2>
                    <p className="text-base desktop:text-lg text-emTextSecondary max-w-[700px] mx-auto leading-relaxed">
                        EmailMagnet analyzes pop-up structures, incentives, CTAs, timing, and design patterns used by top Shopify brands — then applies them to your store instantly.
                    </p>
                </motion.div>

                {/* Brand Logos Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-x-8 gap-y-12 desktop:gap-x-16 desktop:gap-y-16 items-center justify-items-center max-w-[1200px] mx-auto"
                >
                    {brands.map((brand) => (
                        <motion.div
                            key={brand.name}
                            variants={item}
                            className="relative w-24 h-10 desktop:w-32 desktop:h-12 w-full flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <div className="relative w-full h-full">
                                {/* Note: Using object-contain and fill to handle various aspect ratios gracefully */}
                                <Image
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100px, 150px"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
