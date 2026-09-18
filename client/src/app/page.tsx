'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import SelectedWork from '@/components/sections/SelectedWork';
import Statement from '@/components/sections/Statement';
import Services from '@/components/sections/Services';
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
    <main className="min-h-screen bg-white text-[#0A0F1A] flex flex-col justify-between selection:bg-[#006FFF] selection:text-white">
      {/* Precision Frame Container with Vertical Border Lines */}
      <div className="w-full bg-white">
        {/* Floating Navbar */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Main Content with Precision Frame Borders */}
        <div className="max-w-[1080px] mx-auto border-x border-[#E2E8F0] bg-white">
          {/* 1. Hero Section (PRD-v2 Sec 7) */}
          <Hero onOpenConsultation={handleOpenConsultation} />

          {/* 2. Selected Portfolio Work (PRD-v2 Sec 8) */}
          <SelectedWork />

          {/* 3. Positioning Statement (PRD-v2 Sec 4) */}
          <Statement />

          {/* 4. 5 Core Services (PRD-v2 Sec 9) */}
          <Services onOpenConsultation={handleOpenConsultation} />

          {/* 5. Process Workflow (PRD-v2 Sec 10) */}
          <Process />

          {/* 6. Proof & Verified Results (PRD-v2 Sec 11) */}
          <Proof />

          {/* 7. FAQ Accordion (PRD-v2 Sec 12) */}
          <FAQ />

          {/* 8. Contact / Pre-Footer CTA (PRD-v2 Sec 13) */}
          <Contact
            isOpenModal={isConsultationModalOpen}
            onCloseModal={handleCloseConsultation}
          />
        </div>

        {/* 9. Footer */}
        <Footer />
      </div>
    </main>
  );
}
