import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ['300', '500', '600'], subsets: ["latin"] });

export const metadata = {
  title: "Salina Nail",
  description: "Salina Nail - Pamper yourself with our exceptional nail services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
