import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sunith Ramachandra | Portfolio",
  description: "Building Growth Systems with AI + SEO. Marketing strategist, automation builder, and SEO specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(inter.variable, "font-sans min-h-screen bg-background text-foreground overflow-x-hidden relative")}>
        {/* Decorative background gradients */}
        <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden">
          <div className="absolute top-0 -left-1/4 w-[50vw] h-[50vh] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-float-slow" />
          <div className="absolute bottom-0 -right-1/4 w-[50vw] h-[50vh] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-float-slower" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
