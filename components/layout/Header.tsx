"use client";

import Image from "next/image";
import Link from "next/link";
export function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 py-3 md:px-8 max-w-[1600px] mx-auto z-50 relative">
            <div className="flex items-center">
                <Link href="/" className="relative w-24 h-8 md:w-36 md:h-11 hover:opacity-90 transition-opacity">
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
                        width={105}
                        height={30}
                        className="h-6 w-auto opacity-90"
                    />
                </div>
            </div>
        </header>
    );
}
