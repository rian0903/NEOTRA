import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEOTRA | Integrated Digital Engineering Studio',
  description: 'Digital Engineering Studio providing web application development, e-commerce, SEO & AI search optimization, IoT & smart automation, and technical architecture.',
  keywords: [
    'Digital Engineering Studio',
    'Jakarta Web Agency',
    'Next.js Web Development',
    'Go REST API',
    'UI/UX Design System',
    'SEO & AI Search Optimization',
    'NEOTRA',
  ],
  authors: [{ name: 'NEOTRA Strategic Group' }],
  openGraph: {
    title: 'NEOTRA | Integrated Digital Engineering Studio',
    description: 'We design, build, and ship high-performance websites and digital systems combining strategic design, built-in SEO, and full handover.',
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
