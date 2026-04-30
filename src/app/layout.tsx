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
    robots: {
    index: true,
    follow: true,
    noai: true,
  },
  title: {
    default: "Nimora Studio",
    template: "%s | Nimora Studio",
  },
  applicationName: "Nimora Studio",
  description:
    "Nimora Studio helps teams turn complex ideas into clear product direction through strategy, design, and execution.",
  icons: {
    icon: [
      {
        url: "/logo_N.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/logo_N.svg",
    apple: "/logo_N.svg",
  },
  openGraph: {
    title: "Nimora Studio",
    description:
      "Nimora Studio helps teams turn complex ideas into clear product direction through strategy, design, and execution.",
    images: [
      {
        url: "/logo_N.svg",
        width: 1200,
        height: 1200,
      },
    ],
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
      <head>
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Nimora Studio",
              alternateName: "Nimora",
              url: "https://nimorastudio.com",
            }),
          }}
        />

        {/* Organization Schema (VERY IMPORTANT) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nimora Studio",
              url: "https://nimorastudio.com",
              logo: "https://nimorastudio.com/logo_N.svg",
            }),
          }}
        />
      </head>

      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
