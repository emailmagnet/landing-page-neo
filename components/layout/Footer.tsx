"use client";

import Link from "next/link";
import posthog from "posthog-js";

export function Footer() {
    const handleFooterLinkClick = (linkName: string, href: string, isExternal: boolean) => {
        posthog.capture("footer_link_clicked", {
            link_name: linkName,
            link_url: href,
            is_external: isExternal,
        });
    };

    return (
        <footer className="w-full bg-[#F1F5F9] z-10 pt-16 pb-8">
            <div className="max-w-[1600px] mx-auto px-4 desktop:px-6">
                <div className="border-t border-emTextSecondary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Copyright */}
                    <p className="text-emTextSecondary text-sm order-2 md:order-1">
                        © 2023-2026 EmailMagnet
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
                        <Link
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleFooterLinkClick("LinkedIn", "https://www.linkedin.com", true)}
                            className="text-emTextSecondary hover:text-emDark transition-colors text-sm font-medium"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="https://apps.shopify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleFooterLinkClick("Shopify", "https://apps.shopify.com", true)}
                            className="text-emTextSecondary hover:text-emDark transition-colors text-sm font-medium"
                        >
                            Shopify
                        </Link>
                        <Link
                            href="/privacy"
                            onClick={() => handleFooterLinkClick("Privacy Policy", "/privacy", false)}
                            className="text-emTextSecondary hover:text-emDark transition-colors text-sm font-medium"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            onClick={() => handleFooterLinkClick("Terms of Use", "/terms", false)}
                            className="text-emTextSecondary hover:text-emDark transition-colors text-sm font-medium"
                        >
                            Terms of Use
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}
