import Image from "next/image";

const NavBar = () => {
    return (
      <nav className="w-full h-fit grid grid-cols-3">
        <a href="/" >
          <Image src="/logo.svg" alt="logo" width={100} height={100} priority draggable={false} className="hover:cursor-pointer" />
        </a>
        <div className="body-text flex flex-col col-span-1 text-right items-end">
            <a href="/about" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">About Ava</a>
            <a href="/contact" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Gallery</a>
            <a href="/exhibits" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Visit Exhibition</a>
        </div>
        <div className="body-text flex flex-col col-span-1 text-right items-end">
            <a href="/about" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Contact Ava</a>
            <a href="/contact" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Press & Media</a>
      </div>
    </nav>
    );
};

export default NavBar;
