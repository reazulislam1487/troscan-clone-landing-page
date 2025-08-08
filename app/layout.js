import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata = {
  title: "Troscán",
  description:
    "Troscán – A modern and elegant furniture landing page crafted with Next.js, Tailwind CSS, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
