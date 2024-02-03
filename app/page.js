import NavBar from "@/components/NavBar";
import SideText from "@/components/SideText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">

      <section className="w-full h-fit  flex flex-row justify-between">
      <div className="self-center items-center -space-y-6">
        <h1 className="hero-title-text -translate-x-[4px]">Harmony In Chaos</h1>
        <h2 className="hero-subtitle-text">Visit Exhibition in NYC</h2>
      </div>
        <Image src="/door.png" alt="door" className="shadow-inner" width={260} height={596} />
      </section>
      <SideText title={"Contemplative Exploration"} body={"As the exhibition unfolds, it beckons the audience to traverse the contours of paradox, finding solace in turbulence and embracing the silent dialogues within the chaos that whisper tales of an unseen, yet palpable, harmony."} textAlignment={"left"}/>

    </div>
  );
}
