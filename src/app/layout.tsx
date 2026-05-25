import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio — Frontend Developer",
  description:
    "Frontend Engineer specializing in React & Next.js. Building performant, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={atkinson.variable}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var a=document.querySelectorAll('[style*="user-select"]');for(var i=0;i<a.length;i++)a[i].style.removeProperty("user-select")})()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
