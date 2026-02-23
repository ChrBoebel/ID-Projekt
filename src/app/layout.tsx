import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ChatWidget } from "@/components/chat";
import { EditProvider } from "@/contexts/EditContext";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "43\" MultiView 3D-Bildschirm - Bedienungsanleitung",
  description: "Bedienungsanleitung für den 43 Zoll MultiView 3D-Bildschirm von 3DGlobal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable} font-sans antialiased bg-white text-slate-800`}>
        <EditProvider>
          {children}
          <ChatWidget />
        </EditProvider>
      </body>
    </html>
  );
}
