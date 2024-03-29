import Head from 'next/head';
import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


export const metadata = {
  title: "Harmony In Chaos | Ava Sterling Exhibition",
  description: "Visit the Ava Sterling Exhibition to experience the harmony in chaos.",
  keywords: 'Ava Sterling,Harmony In Chaos,Exhibition NY,adtimokhin',
  author: 'adtimokhin',
  viewport: 'width=device-width, initial-scale=1.0',
  // Add other important tags here
  openGraph: {
    title: 'Harmony In Chaos | Ava Sterling Exhibition',
    description: 'Visit the Ava Sterling Exhibition to experience the harmony in chaos.',
    type: 'website',
    locale: 'en_US',
    url: 'https://harmony-in-chaos.vercel.app/',
    site_name: 'Harmony In Chaos',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adtimokhin',
    creator: '@adtimokhin',
  },
}



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
