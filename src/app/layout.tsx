import "./globals.css";
import { Plus_Jakarta_Sans, Open_Sans } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

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

export const metadata = {
  title: "Nimora Studio",
  description:
    "Nimora Studio helps teams turn complex ideas into clear product direction through strategy, design, and execution.",
  icons: {
    icon: "/logo_N.svg",
    shortcut: "/logo_N.svg",
    apple: "/logo_N.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${openSans.variable}`}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}