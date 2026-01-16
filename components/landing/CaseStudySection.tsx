"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Avoid SSR hydration issues by loading react-countup on the client.
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

/** Hook: respects user's motion preferences */
function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined" || !("matchMedia" in window)) return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
        setReduced(mq.matches);
        mq.addEventListener?.("change", onChange);
        return () => mq.removeEventListener?.("change", onChange);
    }, []);
    return reduced;
}

/** Utility: parse a metric like "98%", "3.8x", "$1,200+", "1.5M", "€23.4k" */
function parseMetricValue(raw: string) {
    const value = (raw ?? "").toString().trim();
    const m = value.match(
        /^([^\d\-+]*?)\s*([\-+]?\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([^\d\s]*)$/
    );
    if (!m) {
        return { prefix: "", end: 0, suffix: value, decimals: 0 };
    }
    const [, prefix, num, suffix] = m;
    const normalized = num.replace(/,/g, "");
    const end = parseFloat(normalized);
    const decimals = (normalized.split(".")[1]?.length ?? 0);
    return {
        prefix: prefix ?? "",
        end: isNaN(end) ? 0 : end,
        suffix: suffix ?? "",
        decimals,
    };
}

/** Small component: one animated metric */
function MetricStat({
    value,
    label,
    sub,
    duration = 1.6,
}: {
    value: string;
    label: string;
    sub?: string;
    duration?: number;
}) {
    const reduceMotion = usePrefersReducedMotion();
    const { prefix, end, suffix, decimals } = parseMetricValue(value);

    return (
        <div className="flex flex-col gap-2 text-left p-6">
            <p
                className="text-2xl font-medium text-emDark sm:text-4xl"
                aria-label={`${label} ${value}`}
            >
                {prefix}
                {reduceMotion ? (
                    <span>
                        {end.toLocaleString(undefined, {
                            minimumFractionDigits: decimals,
                            maximumFractionDigits: decimals,
                        })}
                    </span>
                ) : (
                    <CountUp
                        end={end}
                        decimals={decimals}
                        duration={duration}
                        separator=","
                        enableScrollSpy
                        scrollSpyOnce
                    />
                )}
                {suffix}
            </p>
            <p className="font-medium text-emDark text-left">
                {label}
            </p>
            {sub ? (
                <p className="text-emTextSecondary text-left">{sub}</p>
            ) : null}
        </div>
    );
}

const CASE_STUDIES = [
    {
        image: "/images/cases/SCR-20260114-rilp.png",
        headline: "Gamified Conversion Strategy",
        body: "The gamified 'Choose your fishing vibe' approach transformed our discount popup into an engaging experience. By tapping into angler identity and curiosity, we created psychological investment that drove significantly higher conversions.",
        metrics: [
            { value: "72%", label: "Higher Conversions", sub: "Email capture rate increase" },
            { value: "79%", label: "More Leads", sub: "Additional email captures" },
        ]
    },
    {
        image: "/images/cases/SCR-20260115-mukw.png",
        headline: "Seasonal Peak Optimization",
        body: "For LuvLink’s Mother’s Day campaign, we implemented a high-intent multi-step flow that captured both email and SMS subscribers simultaneously. By leveraging peak seasonal demand with a frictionless two-stage engagement model, we significantly expanded their remarketing list while more than doubling the conversion efficiency of their existing traffic.",
        metrics: [
            { value: "138%", label: "Higher Conversion Rate", sub: "Total lead capture efficiency" },
            { value: "142%", label: "More Leads Generated", sub: "Combined Email & SMS growth" },
        ]
    },
    {
        image: "/images/cases/SCR-20260115-nbuw.png",
        headline: "Mystery Value Framework",
        body: "Replacing a complex gamified contest with a clean, curiosity-driven 'mystery discount' strategy drastically reduced user friction. By simplifying the value proposition and utilizing a white-space dominant design, we achieved double the lead capture efficiency compared to the previous interactive campaign.",
        metrics: [
            { value: "101%", label: "Lift in Email Rate", sub: "More than double the conversion" },
            { value: "97%", label: "SMS Growth", sub: "Increase in phone number capture" },
        ]
    }
];

export function CaseStudySection() {
    return (
        <section
            className="py-24 desktop:py-32 bg-[#F1F5F9] w-full"
            aria-labelledby="case-studies-heading"
        >
            <div className="max-w-[1600px] w-full mx-auto px-4 desktop:px-6">
                {/* Header */}
                <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-16 desktop:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        id="case-studies-heading"
                        className="text-4xl desktop:text-[56px] font-normal text-emDark leading-[1.1] tracking-tight"
                    >
                        Real Results with EmailMagnet
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg desktop:text-xl text-emTextSecondary max-w-[700px] mx-auto"
                    >
                        From A/B testing to revenue growth—EmailMagnet delivers measurable improvements with data-driven optimization.
                    </motion.p>
                </div>

                {/* Case Study Integration */}
                {/* Case Studies List */}
                <div className="flex flex-col gap-20">
                    {CASE_STUDIES.map((study, idx) => {
                        const isReversed = idx % 2 !== 0; // Second case (index 1) will be reversed (Metrics Left)

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="grid gap-12 lg:grid-cols-3 xl:gap-24 items-center pb-12 last:pb-0 border-b border-gray-200 last:border-0"
                            >
                                {/* Content Side (Image + Text) */}
                                <div
                                    className={`flex flex-col sm:flex-row gap-10 lg:col-span-2 text-left border-gray-200 
                                    ${isReversed
                                            ? "lg:order-2 lg:border-l lg:pl-12 xl:pl-16"
                                            : "lg:border-r lg:pr-12 xl:pr-16"
                                        }`}
                                >
                                    <Image
                                        src={study.image}
                                        alt={study.headline}
                                        width={600}
                                        height={800}
                                        className="aspect-[9/16] h-auto w-full max-w-60 lg:max-w-xs rounded-2xl object-cover ring-1 ring-[#e6e6e6] shadow-sm hover:shadow-lg transition-all duration-300"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <figure className="flex flex-col justify-center gap-8 text-left">
                                        <div className="text-lg sm:text-xl leading-relaxed text-left">
                                            <h3 className="text-xl sm:text-2xl font-normal text-emDark leading-relaxed text-left mb-3">
                                                {study.headline}
                                            </h3>
                                            <span className="block text-emTextSecondary text-base sm:text-lg leading-relaxed">
                                                {study.body}
                                            </span>
                                        </div>
                                    </figure>
                                </div>

                                {/* Metrics Side */}
                                <div className={`grid grid-cols-1 gap-10 self-center text-left ${isReversed ? "lg:order-1" : ""}`}>
                                    {study.metrics.map((metric, mIdx) => (
                                        <MetricStat
                                            key={mIdx}
                                            value={metric.value}
                                            label={metric.label}
                                            sub={metric.sub}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
