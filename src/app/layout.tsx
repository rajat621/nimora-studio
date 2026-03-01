import "./globals.css";
import { Plus_Jakarta_Sans, Open_Sans } from "next/font/google";

/**
 * Fonts
 * - Plus Jakarta Sans → Headings ONLY
 * - Open Sans → Body, buttons, UI text
 * Loaded via next/font for performance + no CLS
 */

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Global metadata
 * This is studio-grade, SEO-safe, and extensible later
 */
export const metadata = {
  title: "Nimora Studio — From Complex Ideas to Clear Direction",
  description:
    "Nimora Studio helps teams turn complex ideas into clear product direction through strategy, design, and execution.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${openSans.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
