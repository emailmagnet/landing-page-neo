"use client";

import Image from "next/image";
import Link from "next/link";
export function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 py-5 md:px-8 max-w-[1600px] mx-auto z-50 relative">
            <div className="flex items-center">
                <Link href="/" className="relative w-32 h-10 md:w-40 md:h-12 hover:opacity-90 transition-opacity">
                    <Image
                        src="/images/logo/em_logo_dark.svg"
                        alt="EmailMagnet"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                {/* Navigation links can go here in the future */}
            </nav>

            <div>
                <div>
                    <Image
                        src="/images/logo/shopify-partners.svg"
                        alt="Shopify Partners"
                        width={140}
                        height={40}
                        className="h-8 w-auto opacity-90"
                    />
                </div>
            </div>
        </header>
    );
}
