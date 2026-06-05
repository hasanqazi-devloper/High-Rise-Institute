import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

// 📦 Dynamic Imports: Navbar aur Footer ki Server-Side Rendering (SSR) off kar di 
// taake window scroll aur dynamic icons browser par smooth chalein aur hydration error na aaye.
const Navbar = dynamic(() => import("@/src/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/src/components/Footer"), { ssr: false });

// Modern aur clean font load kar rahe hain website ke liye
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Website ka Title aur Description (SEO ke liye)
export const metadata: Metadata = {
  title: "HRD Institute | Degree Se Skills Tak",
  description: "Sirf degree kafi nahi! Master the skills that global companies demand. Zero theory, Full code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakartaSans.variable} font-sans antialiased bg-[#030303] text-white selection:bg-[#FFC71E]/30`}
      >
        {/* Global Transparent Sticky Navbar Component */}
        <Navbar />
        
        {/* Main Content Render Box (Aapke baqi saare sections isme load honge) */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Custom Premium Multan Base Footer Component */}
        <Footer />
      </body>
    </html>
  );
}