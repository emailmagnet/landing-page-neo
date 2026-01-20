import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { SecondVoice } from "@/components/landing/SecondVoice";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { ExampleGallery } from "@/components/landing/ExampleGallery";

import { ThreeDCarouselGallery } from "@/components/landing/ThreeDCarouselGallery";
import { CaseStudySection } from "@/components/landing/CaseStudySection";

export default function Home() {
  return (
    <div className="font-display overflow-x-hidden bg-[#FCFBF8]">
      {/* Full screen "Above the Fold" section */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
      </div>

      <main className="flex-grow">
        {/* TrustBar starts below the fold */}
        <TrustBar />
        {/* <CaseStudySection /> */}
        {/* <ExampleGallery /> */}
        <ThreeDCarouselGallery />
        <SecondVoice />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

