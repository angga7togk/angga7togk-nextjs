import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'], // Include the subsets you need
});

export const metadata: Metadata = {
  title: "Angga7Togk",
  description: "Angga7Togk Developer Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/img/profile.jpg"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
