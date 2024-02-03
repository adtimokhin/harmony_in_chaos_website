import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-20 my-5 h-screen">

      {/* Navigation panel */}
      <nav className="w-full h-fit grid grid-cols-3">
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
      </nav>

    </div>
  );
}
