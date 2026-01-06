import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { SecondVoice } from "@/components/landing/SecondVoice";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import InfiniteGridBackground from "@/components/ui/infinite-grid-integration";

export default function Home() {
  return (
    <div className="font-display overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <SecondVoice />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
