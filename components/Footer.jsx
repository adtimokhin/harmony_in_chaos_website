import Image from "next/image";

const Footer = () => {
    return (
      <footer className="w-full h-fit grid tablet:grid-cols-3 grid-cols-2 pb-8 pt-[25vh] z-20 bg-[#E9E9E9]">
        <a href="/">
          <Image src="/logo.svg" alt="logo" width={100} height={100} draggable={false} />
        </a>
        <div className="tablet:col-span-2 col-span-1 tablet:flex flex-row flex-1 justify-between">
          <div className="body-text flex flex-col text-right items-end">
            <a href="/about" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">About Ava</a>
            <a href="/contact" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Gallery</a>
            <a href="/exhibits" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Visit Exhibition</a>
          </div>
          <div className="body-text flex flex-col  text-right items-end">
            <a href="/about" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Contact Ava</a>
            <a href="/contact" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Press & Media</a>
          </div>
        </div>
        <div className="col-span-3 bg-red w-full h-10 text-center mt-[135px]"> 
          <p className="secondary-title-decoration-text "> Designed by <a className="underline hover:text-subtitle-text transition-colors duration-200 ease-linear" href="https://www.adtimokhin.me/" target="_blank">@adtimokhin</a></p>
       </div>
    </footer>
    );
};

export default Footer;
