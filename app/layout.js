import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Providers from "@/app/providers";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-on-background font-body-md`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
