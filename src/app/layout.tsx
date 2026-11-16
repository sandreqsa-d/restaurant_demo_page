import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";


export const metadata: Metadata = {
  title: "GELA — Modern Georgian Kitchen",
  description: "Experience authentic Georgian cuisine reimagined with modern techniques. Reserve your table at GELA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F5ECD7] text-[#3B1F0E] font-sans">
        <Header/> 
        {children} 
        <Footer/>
      </body>
    </html>
  );
}

