import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { SecondVoice } from "@/components/landing/SecondVoice";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { ExampleGallery } from "@/components/landing/ExampleGallery";
import InfiniteGridBackground from "@/components/ui/infinite-grid-integration";

export default function Home() {
  return (
    <InfiniteGridBackground className="font-display overflow-x-hidden">
      {/* Full screen "Above the Fold" section */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
      </div>

      <main className="flex-grow">
        {/* TrustBar starts below the fold */}
        <TrustBar />
        <ExampleGallery />
        <SecondVoice />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </InfiniteGridBackground>
  );
}

