import InTextButton from "@/components/InTextButton";
import NavBar from "@/components/NavBar";
import SideText from "@/components/SideText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">

      <section className="w-full h-fit flex flex-row justify-between">
      <div className="self-center items-center -space-y-6">
        <h1 className="hero-title-text -translate-x-[4px]">Harmony In Chaos</h1>
        <h2 className="hero-subtitle-text">Visit Exhibition in NYC</h2>
      </div>
        <Image src="/door.png" alt="door" className="shadow-inner" width={260} height={596} />
      </section>
      <SideText title={"Contemplative Exploration"}
       body={"As the exhibition unfolds, it beckons the audience to traverse the contours of paradox, finding solace in turbulence and embracing the silent dialogues within the chaos that whisper tales of an unseen, yet palpable, harmony."} 
       textAlignment={"left"}/>

       <h2 className="secondary-title-decoration-text">Masterpieces</h2>

      {/*  Silent Dialogues  */}
       <section className="w-full grid grid-cols-3">
        <div className="h-full flex flex-col justify-between">          
          <div className="-space-y-2">
            <p className="secondary-title-decoration-text">01</p>
            <h3 className="secondary-title-text">Silent Dialogues</h3>
          </div>
          <p className="body-text w-[80%]">Combines mindfulness with the demands of our digital age. It's a tranquil pursuit, navigating the currents of information to find a serene center within the dynamic pace of our ever-evolving world.</p>
        </div>
        <div className="w-full h-full items-center justify-center flex">
          <img src="/painting.png" alt="Silent Dialogues Painting" className="fill"/>
        </div>
        <div>
        <div className="h-full flex flex-col justify-between items-end">    
        <SideText title={"Urban Dichotomy"}
       body={"In the heart of the urban tapestry, chaos and order converge, creating a vibrant yet enigmatic intersection where the city's rhythm unfolds."} 
       textAlignment={"right"}/>      
          <InTextButton mainText={"Gallery"} subText={"View all artwork"}/>
        </div>
        </div>
       </section>

       {/* Contours of Tranquility */}
       <section className="w-full grid grid-cols-3 ">
        <Image src="/black_statue.png" alt="painting" className="fill" width={500} height={500} />
        <div className="h-1/2 flex flex-col justify-between">          
          <div className="-space-y-2">
            <p className="secondary-title-decoration-text">02</p>
            <h3 className="secondary-title-text">Contours of Tranquility</h3>
          </div>
          <p className="body-text w-[80%]">Delving into the serene shapes and forms that arise within chaos, capturing the essence of tranquility through minimalist contours.</p>
        </div>
        <div className="h-full flex flex-col justify-between items-end">     
            <SideText title={"Artistic Alchemy"}
          body={"The artists, akin to alchemists of the visual realm, unveil the harmony within chaos through deliberate strokes and nuanced expressions, transcending the surface to explore deep realms of emotion."} 
          textAlignment={"right"}/>      
          <SideText title={"Tumultuous Symphony"}
          body={"Life's rhythm, pulsating through the city's veins, paints a vivid portrait where disorder and structure coalesce into a silent agreement, forming an intricate pattern amidst the hustle."} 
          textAlignment={"right"}/>           
        </div>
       </section>

       

    </div>
  );
}
