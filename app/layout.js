import Head from 'next/head';
import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

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
      <body className="mx-[1.25rem] phone:mx-[1.25rem] tablet:mx-[2.5rem] laptop:mx-[5rem] pt-8 relative">
        <div className="h-full w-[1px] bg-[#BBBBBB] absolute tablet:inline hidden top-0 left-1/3 -translate-x-1 -z-10"></div>
        <div className="h-full w-[1px] bg-[#BBBBBB] absolute top-0 tablet:right-1/3 right-1/2 translate-x-1 -z-10"></div>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
