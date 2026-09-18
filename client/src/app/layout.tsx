import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEOTRA — Integrated Digital Engineering Studio',
  description: 'Digital engineering studio providing web application development, IoT & smart automation, network infrastructure, digital UI/UX design, and technical project mentorship.',
  keywords: [
    'Digital Engineering Studio',
    'Web Engineering',
    'IoT Automation',
    'Network Infrastructure',
    'UI/UX Design',
    'Next.js',
    'Go Fiber',
    'Software Architecture',
    'NEOTRA',
  ],
  authors: [{ name: 'NEOTRA Engineering Team' }],
  openGraph: {
    title: 'NEOTRA — Integrated Digital Engineering Studio',
    description: 'We build digital systems that make complex things feel simple. Web, automation, infrastructure, and digital product work.',
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
      <body className="bg-void text-slate-100 antialiased selection:bg-accent selection:text-void">
        {children}
      </body>
    </html>
  );
}
