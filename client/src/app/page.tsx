import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import SelectedWork from '@/components/sections/SelectedWork';
import Statement from '@/components/sections/Statement';
import Services from '@/components/sections/Services';
import TechMarquee from '@/components/sections/TechMarquee';
import Process from '@/components/sections/Process';
import Proof from '@/components/sections/Proof';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-slate-100 flex flex-col justify-between selection:bg-accent selection:text-void">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Statement />
      <Services />
      <TechMarquee />
      <Process />
      <Proof />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
