import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- UPDATED METADATA FOR HAMMAD ARSHAD ---
export const metadata = {
  title: "Hammad Arshad | Full Stack Architect", 
  description:
    "I'm Hammad Arshad, a high-performance Full Stack Developer specializing in React, Next.js, Tailwind CSS, and the MERN stack. Explore my portfolio and professional projects.",
  verification: {
    google: "M5Qrow6Ov4lrWUy6Uf2BtSnyyH1kyoe-hOKlzmuBjf4", 
  },
  keywords: [
    "Hammad Arshad",
    "Hammad Arshad Developer",
    "Best Developer in Rawalpindi",
    "Full Stack Developer Pakistan",
    "React.js Expert",
    "Next.js Architect",
    "Tailwind CSS Specialist",
    "MERN Stack Developer",
    "Hammad Arshad Portfolio",
  ],
  authors: [{ name: "Hammad Arshad" }],
  creator: "Hammad Arshad",
  publisher: "Hammad Arshad",
  metadataBase: new URL("https://hammadarshad.dev"), // Update this with your actual domain later

  openGraph: {
    title: "Hammad Arshad | Full Stack Developer Portfolio",
    description:
      "Professional portfolio of Hammad Arshad, showcasing scalable web applications built with Next.js and ASP.NET.",
    url: "https://hammadarshad.dev",
    siteName: "Hammad Arshad Portfolio",
    images: [
      {
        url: "/banner.png", // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Hammad Arshad - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://hammadarshad.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]`}
      >
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}