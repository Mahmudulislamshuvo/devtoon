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
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(138, 235, 255, 0.03) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
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
