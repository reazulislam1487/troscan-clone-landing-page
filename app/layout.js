import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";

const archivo = Archivo({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Troscán",
  description:
    "Troscán – A modern and elegant furniture landing page crafted with Next.js, Tailwind CSS, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${archivo.className} antialiased`}>
        <Banner />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
