import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/mini/ToastProvider";


export const metadata: Metadata = {
  title: "Hekto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider >
        <Navbar />
          {children}
        <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
