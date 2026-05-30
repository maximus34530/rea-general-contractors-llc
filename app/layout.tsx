import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'REA General Contractors LLC',
  description: 'Professional services by REA General Contractors LLC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
