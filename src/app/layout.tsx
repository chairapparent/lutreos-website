import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lutreos | Supported Living Services",
  description:
    "Lutreos provides supported living services and helps people with developmental disabilities navigate obstacles and get where they want to go in life.",
  applicationName: "Lutreos",
  authors: [{ name: "Lutreos LLC" }],
  keywords: [
    "Lutreos",
    "supported living",
    "developmental disabilities",
    "independent living support",
  ],
  openGraph: {
    title: "Lutreos | Supported Living Services",
    description:
      "We help our clients get where they want to go. Supported living services that facilitate progress in individual lives.",
    url: "https://www.lutreos.com",
    siteName: "Lutreos",
    type: "website",
    images: [
      {
        url: "/brand/icon/avatar-1024.png",
        width: 1024,
        height: 1024,
        alt: "Lutreos",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand/icon/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/icon/icon-180.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1F4B99",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
