import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEOTRA | Jakarta Digital Web Agency® Trusted by 100+ Brands®',
  description: 'Trusted by 100+ Brands. We design, build, and optimize websites and digital products that drive measurable growth for our clients.',
  keywords: [
    'Jakarta Web Agency',
    'Digital Engineering Studio',
    'Next.js Web Development',
    'Go REST API',
    'UI/UX Design',
    'SEO & AI Search Optimization',
    'IoT Automation',
    'NEOTRA',
  ],
  authors: [{ name: 'NEOTRA Strategic Group' }],
  openGraph: {
    title: 'NEOTRA | Jakarta Digital Web Agency® Trusted by 100+ Brands®',
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
    <html lang="id" className="dark scroll-smooth">
      <body className="bg-agency-dark text-agency-textPrimary antialiased selection:bg-agency-electric selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
