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

export const metadata = {
  title: "Ali Husnain | Full Stack Developer ",
  description:
    "I'm Ali Husnain, a passionate Full Stack Developer specializing in React, Next.js, Tailwind CSS, and the MERN stack. Explore my portfolio, projects, and contact me for collaborations or opportunities.",
  verification: {
    google: "M5Qrow6Ov4lrWUy6Uf2BtSnyyH1kyoe-hOKlzmuBjf4", 
  },
  keywords: [
    "Ali Husnain",
    "Ali Husnain Developer",
    "Best Developer in Rawalpindi",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "MERN Stack",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Ali Husnain" }],
  creator: "Ali Husnain",
  publisher: "Ali Husnain",
  metadataBase: new URL("https://alihusnaindev.vercel.app"),

  openGraph: {
    title: "Ali Husnain | Full Stack Developer Portfolio",
    description:
      "Portfolio of Ali Husnain, Full Stack Developer skilled in React, Next.js, Tailwind CSS, and the MERN stack. View projects, skills, and get in touch.",
    url: "https://alihusnaindev.vercel.app",
    siteName: "Ali Husnain Portfolio",
    images: [
      {
        url: "https://alihusnaindev.vercel.app/banner.png",
        width: 1200,
        height: 630,
        alt: "Ali Husnain - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://alihusnaindev.vercel.app",
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
