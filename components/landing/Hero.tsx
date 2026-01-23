"use client";

import { useState } from "react";
import { MagicWandIcon } from "@phosphor-icons/react";
import posthog from "posthog-js";
import { useFeatureFlagVariantKey } from 'posthog-js/react';

import { Typewriter } from "@/components/ui/typewriter";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

export function Hero() {
    const [inputValue, setInputValue] = useState("");

    const variant = useFeatureFlagVariantKey('magic-vs-money');

    console.log('🧪 Current A/B Test Variant:', variant);
    console.log('📊 Showing version:', variant === 'test' ? 'B (Money/ROI)' : 'A (Magic/Innovation)');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        // Remove https:// or http:// if pasted or typed
        value = value.replace(/^https?:\/\//, "");

        setInputValue(value);
    };

    const handleInputBlur = () => {
        if (inputValue.trim()) {
            posthog.capture("store_url_entered", {
                store_url: inputValue,
                has_myshopify_domain: inputValue.includes("myshopify.com"),
            });
        }
    };

    const handleGenerateClick = () => {
        posthog.capture("generate_popup_clicked", {
            store_url: inputValue || null,
            has_store_url: inputValue.trim().length > 0,
        });

        // Navigate to AI builder
        window.location.href = "https://ai-builder-rho-six.vercel.app/";
    };

    const showPrefix = inputValue.length > 0;

    const saturatedGradients = [
        "linear-gradient(135deg, #a5d8ff 0%, #d4f7b5 100%)", // Start
        "linear-gradient(135deg, #d4f7b5 0%, #a5d8ff 100%)", // Middle
        "linear-gradient(135deg, #a5d8ff 0%, #d4f7b5 100%)", // End (Matches Start)
    ];

    return (
        <section className="relative w-full flex-grow flex flex-col items-center justify-center px-4 desktop:px-6 text-center z-10 transition-all duration-300 bg-[#FCFBF8] overflow-hidden">

            {/* Gradient Background with Top Fade Mask */}
            <div
                className="absolute inset-0 z-0 pointer-events-none min-h-0"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%)"
                }}
            >
                <AnimatedGradientBackground
                    gradientColors={[
                        "#FCFBF8",
                        "#2979FF",
                        "#FF80AB",
                        "#FF6D00",
                        "#FFD600",
                        "#00E676",
                        "#3D5AFE"
                    ]}
                />
            </div>

            {/* Centered Content Container - max-width controlled here */}
            <div className="max-w-[1600px] w-full flex flex-col items-center relative z-10">

                {/* Headline */}
                <h1 className="text-4xl desktop:text-[64px] font-normal text-emDark leading-[1.1] mb-6 tracking-tight max-w-[1000px] text-balance">
                    {variant === 'test' ? (
                        "AI That Builds Better Pop-Ups Than Any Human Expert"
                    ) : (
                        "See Your Highest-Converting Pop-Up Before You Install Anything"
                    )}
                </h1>

                {/* Sub-headline */}
                <div className="text-lg desktop:text-[22px] text-emTextSecondary font-medium leading-relaxed max-w-[900px] mb-10 desktop:mb-14">
                    {variant === 'test' ? (
                        <>
                            Use AI to automatically{" "}
                            <Typewriter
                                text={[
                                    "capture more leads.",
                                    "drive higher revenue.",
                                    "slash bounce rates.",
                                    "personalize every offer."
                                ]}
                                speed={40}
                                waitTime={1500}
                                loop={true}
                                cursorChar="|"
                            />
                        </>
                    ) : (
                        <>
                            It’s not just a builder. It’s{" "}
                            <Typewriter
                                text={[
                                    "your expert copywriter.",
                                    "your senior designer.",
                                    "your conversion strategist.",
                                    "your growth partner."
                                ]}
                                speed={40}
                                waitTime={1500}
                                loop={true}
                                cursorChar="|"
                            />
                        </>
                    )}
                </div>

                {/* Input + CTA Block */}
                <div className="w-full max-w-[800px] flex flex-col desktop:flex-row desktop:p-2 desktop:bg-white desktop:border-[2px] desktop:border-[#e6e6e6] desktop:rounded-full desktop:shadow-[0_4px_30px_rgba(0,0,0,0.04)] desktop:focus-within:border-emBlue desktop:focus-within:ring-4 desktop:focus-within:ring-emBlue/10 transition-all gap-3 desktop:gap-0">

                    {/* URL Input */}
                    <div className="relative flex-1 group w-full flex items-center bg-white desktop:bg-transparent border-[1px] border-[#e6e6e6] desktop:border-none rounded-full desktop:rounded-none shadow-sm desktop:shadow-none h-[60px] desktop:h-auto focus-within:border-emBlue focus-within:ring-4 focus-within:ring-emBlue/10 desktop:focus-within:ring-0 desktop:focus-within:border-transparent transition-all">
                        {showPrefix && (
                            <div className="absolute inset-y-0 left-5 desktop:left-6 flex items-center pointer-events-none">
                                <span className="text-gray-400 text-base desktop:text-xl transform translate-y-[1px]">https://</span>
                            </div>
                        )}
                        <input
                            type="url"
                            value={inputValue}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            placeholder="Enter your Shopify Store URL..."
                            className={`w-full h-[60px] desktop:h-[76px] pr-4 bg-transparent border-none outline-none text-base desktop:text-xl text-emDark placeholder:text-gray-400 rounded-full desktop:rounded-none ${showPrefix ? 'pl-[4.5rem] desktop:pl-24' : 'pl-5 desktop:pl-6'
                                }`}
                        />
                    </div>

                    {/* Generate Button */}
                    <button
                        onClick={handleGenerateClick}
                        className="h-[60px] desktop:h-[76px] px-8 desktop:px-12 bg-[#0A3B32] hover:bg-[#0A3B32]/90 text-white text-base desktop:text-xl font-bold rounded-full flex items-center justify-center gap-2 desktop:gap-3 transition-all shadow-md desktop:shadow-none hover:shadow-lg desktop:hover:shadow-none whitespace-nowrap"
                    >
                        Generate
                        <MagicWandIcon size={20} weight="fill" className="desktop:hidden" />
                        <MagicWandIcon size={28} weight="fill" className="hidden desktop:block" />
                    </button>
                </div>

                {/* Micro-copy */}
                <p className="mt-4 text-sm text-emTextSecondary/80">
                    No signup required to generate. Works with Shopify.
                </p>
            </div>

        </section>
    );
}
