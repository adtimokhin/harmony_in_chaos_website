import Image from "next/image";

const NavBar = () => {
    return (
      <nav className="w-full h-fit grid tablet:grid-cols-3 grid-cols-2">
        <a href="/" >
          <Image src="/logo.svg" alt="logo" width={100} height={100} priority draggable={false} className="hover:cursor-pointer" />
        </a>
        <div className="body-text flex-col col-span-1 text-right items-end hidden tablet:flex">
            <a href="/about" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">About Ava</a>
            <a href="/contact" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Gallery</a>
            <a href="/exhibits" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Visit Exhibition</a>
        </div>
        <div className="body-text flex-col col-span-1 text-right items-end hidden tablet:flex">
            <a href="/about" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Contact Ava</a>
            <a href="/contact" className="w-fit hover:text-subtitle-text transition-colors duration-200 ease-linear">Press & Media</a>
      </div>

      {/* Burger menu */}
      <div className="col-span-1 items-end flex flex-col">
      <svg width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="47" height="1" fill="#979797"/>
<rect x="5" y="11" width="37" height="1" fill="#979797"/>
<rect y="23" width="47" height="1" fill="#979797"/>
</svg>
      </div>
    </nav>
    );
};

export default NavBar;
