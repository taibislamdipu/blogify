import localFont from "next/font/local";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blogify | Code. Content. Community.",
  description:
    "Blogify is a modern blogging platform that helps you write, publish, and share your ideas effortlessly. Create beautiful blogs with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased`}
      >
        <Header />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
