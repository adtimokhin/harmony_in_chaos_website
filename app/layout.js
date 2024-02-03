import Head from 'next/head';
import "./globals.css";

export const metadata = {
  title: "Harmony In Chaos | Ava Sterling Exhibition",
  description: "Visit the Ava Sterling Exhibition to experience the harmony in chaos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet"/>
      </Head>
      <body>{children}</body>
    </html>
  );
}
