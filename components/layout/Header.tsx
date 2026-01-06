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
                <Link
                    href="https://apps.shopify.com/emailmagnet" // Placeholder URL, should be updated if known
                    className="bg-emGreen hover:bg-[#82a73d] text-white font-semibold rounded-full px-6 py-3 transition-colors text-sm md:text-base shadow-sm hover:shadow-md"
                >
                    Install on Shopify
                </Link>
            </div>
        </header>
    );
}
