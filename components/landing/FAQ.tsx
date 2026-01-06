"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
    {
        question: "What is Email Magnet?",
        answer: "Email Magnet is the first AI-powered Shopify popup app that automatically generates high-converting popups for your store. AI analyzes your store data and uses insights from thousands of case studies to create popups tailored to your brand — then publishes them to Shopify with one click."
    },
    {
        question: "How does the AI know what popup to create?",
        answer: "When you install Email Magnet, our AI automatically fetches your Shopify store data — products, brand colors, pricing, and industry. It then cross-references our library of thousands of successful popup campaigns to generate popups proven to work for stores like yours. No prompts or descriptions needed."
    },
    {
        question: "Do I need any coding or design skills?",
        answer: "Not at all. AI does everything — analyzes your store, generates the popup, writes the copy, designs the layout. You just click \"Generate\" and then \"Publish.\" If you want to customize, there's a visual editor, but it's completely optional."
    },
    {
        question: "How do I publish my popup to Shopify?",
        answer: "One click. Literally. Once AI generates your popup, hit \"Publish\" and it's live on your store instantly. No code snippets, no exports, no manual setup. Email Magnet integrates seamlessly with Shopify — your popup lives inside your store ecosystem."
    },
    {
        question: "Will this slow down my website?",
        answer: "No. Email Magnet is built for performance. Unlike other popup apps that can hurt your page speed, our popups load asynchronously and have zero impact on your site's performance."
    },
    {
        question: "Does it work with my Shopify theme?",
        answer: "Yes. Email Magnet works with all Shopify themes, including Dawn and all free Shopify themes. AI adapts popups to match your store's style automatically."
    },
    {
        question: "Is it GDPR compliant?",
        answer: "Yes. Email Magnet includes built-in consent management tools, customizable privacy notices, and GDPR-compliant templates. Collect leads legally and ethically."
    },
    {
        question: "What integrations are available?",
        answer: "Email Magnet integrates with Klaviyo, Mailchimp, Sendlane, PostScript, Recart, Attentive, and more. Your captured leads sync automatically to your email and SMS platforms."
    },
    {
        question: "What types of popups can the AI generate?",
        answer: "Exit-intent popups, spin-to-win wheels, email capture forms, SMS signup forms, discount popups, announcement bars, cart recovery popups, welcome offers, and more. AI picks the best type based on your store and goals."
    },
    {
        question: "Can I customize the AI-generated popup?",
        answer: "Absolutely. While AI creates a ready-to-publish popup, you can fine-tune everything with the visual editor — colors, copy, images, triggers, targeting. Or just regenerate if you want a different approach."
    },
    {
        question: "Is there a free plan?",
        answer: "Yes. Email Magnet offers a free plan with AI generation and all core features. Start creating popups with AI today without paying anything."
    },
    {
        question: "How fast can I get my first popup live?",
        answer: "Under 2 minutes. Install the app (one click), let AI generate your popup (automatic), click publish (one click). Most merchants have their first AI-generated popup live in 60-90 seconds."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full py-16 desktop:py-24 bg-transparent z-10">
            <div className="max-w-[1600px] mx-auto px-4 desktop:px-6">

                {/* Left Aligned Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl desktop:text-[64px] font-normal text-emDark mb-12 desktop:mb-16 tracking-tight text-left"
                >
                    Pop-up builder FAQ
                </motion.h2>

                {/* FAQ List */}
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.05 * index }}
                            className="border-t border-emTextSecondary/20"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-8 text-left flex justify-between items-start group"
                            >
                                <span className="text-xl desktop:text-2xl text-emDark font-normal pr-8 leading-snug">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 text-emDark mt-1">
                                    {openIndex === index ? (
                                        <Minus size={24} weight="light" />
                                    ) : (
                                        <Plus size={24} weight="light" />
                                    )}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-lg text-emTextSecondary leading-relaxed max-w-[900px]">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                    {/* Bottom border for last item */}
                    <div className="border-t border-emTextSecondary/20" />
                </div>
            </div>
        </section>
    );
}
