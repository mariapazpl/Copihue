import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copihue Dance Studio",
  description: "Latin dance school with professional instructors specializing in salsa and bachata with a friendly and supportive atmosphere!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="nuBpJDvQCjdfFzVmFeWvx4JGXky0FY27l25tLyAEyKs" />      
      <body className={`${inter.className} bg-red-50 text-zinc-900 flex flex-col min-h-screen`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
