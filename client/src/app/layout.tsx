import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEOTRA | Integrated Digital Engineering Studio',
  description: 'Integrated Digital Engineering Studio specializing in web engineering, connected IoT automation, network infrastructure, digital design systems, and technical mentorship.',
  keywords: [
    'Digital Engineering Studio',
    'Web Engineering',
    'Next.js 14',
    'Go Fiber REST API',
    'IoT Smart Automation',
    'Network Infrastructure',
    'UI/UX Design Systems',
    'Technical Mentorship',
    'NEOTRA',
  ],
  authors: [{ name: 'NEOTRA Strategic Group' }],
  openGraph: {
    title: 'NEOTRA | Integrated Digital Engineering Studio',
    description: 'We build digital systems that make complex things feel simple. Web, automation, infrastructure, and digital design engineered as one system.',
    url: 'https://neotra.id',
    siteName: 'NEOTRA',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#FFFFFF] text-[#0A0F1A] antialiased selection:bg-[#006FFF] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
