import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-gabarito",
});

export const metadata = {
  title: "AH Pharmacy - Modern Unani Medicine & Healthcare",
  description: "Premium Unani Medicine, Herbal Products & Holistic Healthcare Remedies.",
  icons: {
    icon: "/favicon.png",
  },
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('ah_theme');
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${gabarito.variable} antialiased font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
