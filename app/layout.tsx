import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ConvexClientProvider from "@/providers/convexClientProvider";
import Loading from "@/components/auth/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brain Canvas",
  description: "Digital collaboration whiteboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
   
      </body>
    </html>
  );
}
