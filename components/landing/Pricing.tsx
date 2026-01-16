"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import posthog from "posthog-js";

export function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "/mo",
            description: "Design, Launch, Collect Emails. (Powered by EmailMagnet branding).",
            buttonText: "Get Started",
            buttonStyle: "secondary", // Bordered/Secondary
            features: [
                "Infinite Pop-up Generation",
                "Email Collection",
                "Basic Templates",
                "Community Support"
            ]
        },
        {
            name: "Starter",
            price: "$20",
            period: "/mo",
            description: "Remove branding. Standard AI access.",
            buttonText: "Upgrade",
            buttonStyle: "primary-outline", // Perhaps a stronger outline or filled secondary
            features: [
                "Everything in Free",
                "No EmailMagnet Branding",
                "Standard AI Copywriting",
                "Priority Support"
            ]
        },
        {
            name: "Growth",
            price: "$50",
            period: "/mo",
            description: "The 'Second Voice' Expert, A/B Testing, and Advanced optimization.",
            buttonText: "Go Pro",
            buttonStyle: "primary", // Filled Primary (Green)
            recommended: true,
            features: [
                "Everything in Starter",
                "Second Voice AI Insights",
                "A/B Testing",
                "Advanced Analytics",
                "Dedicated Success Manager"
            ]
        }
    ];

    return (
        <section className="relative w-full py-16 desktop:py-24 bg-[#F1F5F9] z-10">
            <div className="max-w-[1600px] mx-auto px-4 desktop:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 desktop:mb-24"
                >
                    <h2 className="text-4xl desktop:text-[64px] font-normal text-emDark mb-6 tracking-tight">
                        Start for Free. Scale as you Grow.
                    </h2>
                    <p className="text-lg desktop:text-xl text-emTextSecondary max-w-[600px] mx-auto">
                        Simple, transparent pricing that grows with your business.
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 desktop:gap-8 max-w-[1200px] mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className={`relative bg-white rounded-[32px] p-8 desktop:p-10 flex flex-col h-full border ${plan.recommended ? 'border-emGreen shadow-lg' : 'border-gray-100 shadow-sm'} hoopver:shadow-md transition-shadow duration-300`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 right-0 mt-6 mr-6">
                                    <span className="bg-emGreen/10 text-emGreen text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Recommended
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-medium text-emDark mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-5xl font-normal text-emDark tracking-tight">{plan.price}</span>
                                <span className="text-lg text-emTextSecondary ml-1">{plan.period}</span>
                            </div>
                            <p className="text-emTextSecondary mb-8 text-sm leading-relaxed min-h-[48px]">
                                {plan.description}
                            </p>

                            <button
                                onClick={() => {
                                    posthog.capture("pricing_plan_clicked", {
                                        plan_name: plan.name,
                                        plan_price: plan.price,
                                        plan_period: plan.period,
                                        button_text: plan.buttonText,
                                        is_recommended: plan.recommended ?? false,
                                    });
                                }}
                                className={`w-full py-4 rounded-full font-bold text-lg transition-all mb-8 ${plan.buttonStyle === 'primary'
                                    ? 'bg-emGreen text-white hover:bg-[#82a73d] shadow-md hover:shadow-lg'
                                    : 'bg-transparent border-2 border-emDark text-emDark hover:bg-emDark hover:text-white'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>

                            <div className="mt-auto">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-emTextSecondary/80">
                                            <Check size={18} weight="bold" className="text-emGreen mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
