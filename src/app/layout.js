import { Montserrat, Elsie_Swash_Caps } from "next/font/google";
import "./globals.css";

const MontserratFont = Montserrat({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ElsieSwashCaps = Elsie_Swash_Caps({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata = {
  title: "Casa Verde",
  description: "E-commerce de plantas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="br">
      <body className={`${MontserratFont.variable} ${ElsieSwashCaps.variable}`}>
        {children}
      </body>
    </html>
  );
}