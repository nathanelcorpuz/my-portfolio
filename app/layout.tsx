import Footer from "./_components/Footer";
import LayoutContact from "./_components/LayoutContact";
import RootLayoutWrapper from "./_components/RootLayoutWrapper";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nathanel Corpuz Developer Portfolio",
  description: "A website to showcase my profession as a web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayoutWrapper>
          {children}
          <LayoutContact />
          <Footer />
        </RootLayoutWrapper>
      </body>
    </html>
  );
}
