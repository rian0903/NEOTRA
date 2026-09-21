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
      <div className="w-full bg-white">
        <Navbar onOpenConsultation={handleOpenConsultation} />

        <div className="max-w-[1080px] mx-auto border-x border-[#E2E8F0] bg-white">
          <Hero onOpenConsultation={handleOpenConsultation} />
          <SelectedWork />
          <Statement />
          <Services onOpenConsultation={handleOpenConsultation} />
          <Process />
          <Proof />
          <FAQ />
          <Contact
            isOpenModal={isConsultationModalOpen}
            onCloseModal={handleCloseConsultation}
          />
        </div>

        <Footer />
      </div>
    </main>
  );
}
