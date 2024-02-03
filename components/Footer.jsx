import Image from "next/image";

const Footer = () => {
    return (
      <footer className="w-full h-fit grid columns-3">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
        <div className="body-text flex flex-col col-span-1 text-right items-end">
            <a href="/about" className="w-fit">About Ava</a>
            <a href="/contact" className="w-fit">Gallery</a>
            <a href="/exhibits" className="w-fit">Visit Exhibition</a>
        </div>
        <div className="body-text flex flex-col col-span-1 text-right items-end">
            <a href="/about" className="w-fit">Contact Ava</a>
            <a href="/contact" className="w-fit">Press & Media</a>
      </div>
      <div className="col-span-3 bg-red w-full h-10 text-center mt-[135px]"> 
        <p className="secondary-title-decoration-text"> Designed by <a className="underline" href="https://www.adtimokhin.me/" target="_blank">@adtimokhin</a></p>
       </div>
    </footer>
    );
};

export default Footer;
