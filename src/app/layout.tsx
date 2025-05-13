import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebRefresh Digital - Automated Website Modernization",
  description: "Modernizing SME websites for the digital age with AI-powered automation and passive income solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <header className="bg-gray-800 shadow-md">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400">
              WebRefresh Digital
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/about" className="hover:text-blue-400">About Us</Link>
              <Link href="/services" className="hover:text-blue-400">Services & Pricing</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 mt-12">
          <div className="container mx-auto px-6 py-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} WebRefresh Digital. All rights reserved.</p>
            <p>Automated Website Modernization for a Passive Future.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

