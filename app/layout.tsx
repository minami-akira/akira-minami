import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akira Minami | Senior Software Engineer | AI & Geospatial",
  description:
    "Senior Software Engineer with 10+ years building production platforms across geospatial analytics and fintech. Expert in Python, TypeScript, AI systems, and cloud-native delivery.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI Systems",
    "Geospatial Analytics",
    "Python",
    "TypeScript",
    "AWS",
    "Next.js",
    "React",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

