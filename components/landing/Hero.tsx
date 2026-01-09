"use client";

import { useState } from "react";
import { ArrowRight, MagicWand } from "@phosphor-icons/react";
import posthog from "posthog-js";
import { useFeatureFlagVariantKey } from 'posthog-js/react';

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

    return (
        <section className="relative w-full flex flex-col items-center justify-center pt-24 pb-20 desktop:pt-36 desktop:pb-32 px-4 desktop:px-6 text-center z-10 transition-all duration-300">

            {/* Centered Content Container - max-width controlled here */}
            <div className="max-w-[1600px] w-full flex flex-col items-center">

                {/* Headline */}
                <h1 className="text-4xl desktop:text-[64px] font-normal text-emDark leading-[1.1] mb-6 tracking-tight max-w-[900px]">
                    {variant === 'test' ? (
                        <>
                            Pop-Ups that actually convert. <br className="hidden desktop:block" />
                            Built in 30 seconds.
                        </>
                    ) : (
                        <>
                            Your Store's Perfect Pop-Up. <br className="hidden desktop:block" />
                            AI-Generated in 30 Seconds.
                        </>
                    )}
                </h1>

                {/* Sub-headline */}
                <p className="text-lg desktop:text-[22px] text-emTextSecondary font-medium leading-relaxed max-w-[900px] mb-10 desktop:mb-14">
                    {variant === 'test' ? (
                        "Stop losing sales to generic templates. Our AI studies your store and creates a custom pop-up proven to capture more emails and drive revenue—automatically."
                    ) : (
                        "Our AI analyzes your brand, writes the copy, and designs a high-converting pop-up instantly. No drag-and-drop. No designers. Just magic."
                    )}
                </p>

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
                        className="h-[60px] desktop:h-[76px] px-8 desktop:px-12 bg-emGreen hover:bg-[#82a73d] text-white text-base desktop:text-xl font-bold rounded-full flex items-center justify-center gap-2 desktop:gap-3 transition-all shadow-md desktop:shadow-none hover:shadow-lg desktop:hover:shadow-none whitespace-nowrap"
                    >
                        Generate
                        <MagicWand size={20} weight="fill" className="desktop:hidden" />
                        <MagicWand size={28} weight="fill" className="hidden desktop:block" />
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
