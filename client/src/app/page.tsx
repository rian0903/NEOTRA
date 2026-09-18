'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TechMarquee from '@/components/sections/TechMarquee';
import SelectedWork from '@/components/sections/SelectedWork';
import StrategicHighlight from '@/components/sections/StrategicHighlight';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Process from '@/components/sections/Process';
import Proof from '@/components/sections/Proof';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#0A0F1A] text-[#F8FAFC] flex flex-col justify-between selection:bg-agency-electric selection:text-white">
      {/* Precision Frame Container with Vertical Border Lines */}
      <div className="w-full bg-[#0A0F1A]">
        {/* Floating Navbar */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Main Content with Precision Frame Borders */}
        <div className="max-w-[1080px] mx-auto border-x border-[#1E2C44] bg-[#0A0F1A]">
          {/* Hero Section */}
          <Hero onOpenConsultation={handleOpenConsultation} />

          {/* Infinite Marquee Logo Cloud */}
          <TechMarquee />

          {/* Selected Portfolio Work */}
          <SelectedWork />

          {/* Strategic Highlight Banner */}
          <StrategicHighlight />

          {/* Services & Bento Grid */}
          <Services onOpenConsultation={handleOpenConsultation} />

          {/* Pricing Packages */}
          <Pricing onOpenConsultation={handleOpenConsultation} />

          {/* Process Workflow */}
          <Process />

          {/* Proof & Client Reviews */}
          <Proof />

          {/* FAQ Accordion */}
          <FAQ />

          {/* Contact / Pre-Footer CTA */}
          <Contact
            isOpenModal={isConsultationModalOpen}
            onCloseModal={handleCloseConsultation}
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
