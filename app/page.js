import InTextButton from "@/components/InTextButton";
import SideText from "@/components/SideText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      {/* TODO: Did not do the two cols for phones */}
      <section className="w-full h-fit mt-[12.5vh] grid tablet:grid-cols-3 grid-cols-2">
      <div className="self-center items-center tablet:-space-y-4 laptop:-space-y-6 tablet:col-span-2">
        <h1 className="hero-title-text -translate-x-[4px]">Harmony in Chaos</h1>
        <h2 className="hero-subtitle-text">Visit Exhibition in NYC</h2>
      </div>

      <div className="col-span-1 tablet:col-start-3 items-end flex justify-end pl-2 h-fit">
        <img src="/door.png" alt="door" className="aspect-[9/19] max-h-[596px]"draggable={false} />
      </div>

      </section>
      {/* TODO: This block of text can take any dimensinos it likes - not cool */}
      <SideText title={"Contemplative Exploration"}
       body={"As the exhibition unfolds, it beckons the audience to traverse the contours of paradox, finding solace in turbulence and embracing the silent dialogues within the chaos that whisper tales of an unseen, yet palpable, harmony."} 
       textAlignment={"left"}/>

       <h2 className="secondary-title-decoration-text mt-[12.5vh]">Masterpieces</h2>

      {/*  Silent Dialogues  */}
       <section className="w-full grid tablet:grid-cols-3 grid-cols-2 mt-[25vh]">
        <div className="h-full flex flex-col justify-between">          
          <div className="-space-y-2">
            <p className="secondary-title-decoration-text">01</p>
            <h3 className="secondary-title-text">Silent Dialogues</h3>
          </div>
          <p className="body-text w-[80%] tablet:inline hidden">Combines mindfulness with the demands of our digital age. It&apos;s a tranquil pursuit, navigating the currents of information to find a serene center within the dynamic pace of our ever-evolving world.</p>
        </div>
        <div className="w-full h-full items-center justify-center flex col-span-2 laptop:col-span-1 tablet:pt-0 pt-4">
          <img src="/painting.png" alt="Silent Dialogues Painting" draggable={false} className="fill"/>
        </div>

      {/* Duplicate text */}
      <div className="tablet:hidden col-span-2 w-full h-fit pt-4 pb-[12.5vh]">
        <div className="grid grid-cols-2 align-bottom">
        <p className="body-text w-[80%] inline tablet:hidden">Combines mindfulness with the demands of our digital age. It&apos;s a tranquil pursuit, navigating the currents of information to find a serene center within the dynamic pace of our ever-evolving world.</p>
        <div className="flex flex-1 justify-end">
           <SideText title={"Urban Dichotomy"}
        body={"In the heart of the urban tapestry, chaos and order converge, creating a vibrant yet enigmatic intersection where the city's rhythm unfolds."} 
        textAlignment={"right"}/> 
        </div>
        </div>
      </div>
        <div className="tablet:h-fit laptop:h-full tablet:items-center laptop:items-end flex tablet:flex-row laptop:flex-col justify-between tablet:col-span-3 laptop:col-span-1 tablet:mt-[12.5vh] laptop:mt-0">    
        <div className="tablet:order-last laptop:order-first hidden tablet:inline">
          <SideText title={"Urban Dichotomy"}
        body={"In the heart of the urban tapestry, chaos and order converge, creating a vibrant yet enigmatic intersection where the city's rhythm unfolds."} 
        textAlignment={"right"}/>    
       </div>  
            <InTextButton mainText={"Gallery"} subText={"View all artwork"} link={"https://adtimokhin.me/"}/>
        </div>
       </section>

       {/* Contours of Tranquility */}
       <section className="w-full h-fit grid tablet:grid-cols-3 grid-cols-2 mt-[50vh]">
        <div className="col-span-2 laptop:col-span-1 h-fit justify-center flex flex-1 tablet:order-1 order-2">
          <img src="/black_statue.png" alt="Contours of Tranquility Statue" draggable={false} className="contain max-h-[80vh] self-center"/>
        </div>
        <div className="tablet:h-full laptop:h-1/2 flex flex-col justify-between translate-x-3 laptop:translate-x-0 tablet:order-2 order-1">          
          <div className="-space-y-2">
            <p className="secondary-title-decoration-text">02</p>
            <h3 className="secondary-title-text">Contours of Tranquility</h3>
          </div>
          <p className="body-text w-[80%] hidden tablet:inline">Delving into the serene shapes and forms that arise within chaos, capturing the essence of tranquility through minimalist contours.</p>
          {/* Side text that is only visible on tablets rn */}
          <div className="hidden tablet:inline laptop:hidden items-end">
          <SideText title={"Artistic Alchemy"}
          body={"The artists, akin to alchemists of the visual realm, unveil the harmony within chaos through deliberate strokes and nuanced expressions, transcending the surface to explore deep realms of emotion."} 
          textAlignment={"left"}/>   
          </div>
        </div>
        <div className="h-full flex-col justify-between items-end hidden laptop:flex tablet:order-3">     
            <SideText title={"Artistic Alchemy"}
          body={"The artists, akin to alchemists of the visual realm, unveil the harmony within chaos through deliberate strokes and nuanced expressions, transcending the surface to explore deep realms of emotion."} 
          textAlignment={"right"}/>      
          <SideText title={"Tumultuous Symphony"}
          body={"Life's rhythm, pulsating through the city's veins, paints a vivid portrait where disorder and structure coalesce into a silent agreement, forming an intricate pattern amidst the hustle."} 
          textAlignment={"right"}/>           
        </div>
         {/* Duplicate text */}
          <div className="tablet:hidden col-span-2 w-full h-fit pt-4 pb-[12.5vh] order-3" >
            <div className="grid grid-cols-2 align-bottom">
              <p className="body-text w-[80%] inline tablet:hidden">Delving into the serene shapes and forms that arise within chaos, capturing the essence of tranquility through minimalist contours.</p>
              <div className="flex flex-1 justify-end">
                <SideText title={"Artistic Alchemy"}
                          body={"The artists, akin to alchemists of the visual realm, unveil the harmony within chaos through deliberate strokes and nuanced expressions, transcending the surface to explore deep realms of emotion."} 
                          textAlignment={"right"}/> 
              </div>
            </div>
          </div>
       </section>

        {/*  Whispers of Order  */}
       <section className="w-full h-fit grid grid-cols-2 laptop:grid-cols-3 mt-[50vh]">
       <div className="h-1/2 flex flex-col justify-between">          
          <div className="-space-y-2">
            <p className="secondary-title-decoration-text">03</p>
            <h3 className="secondary-title-text">Whispers of Order</h3>
          </div>
          <p className="body-text w-[80%] pt-20 laptop:pt-0">Artful integration of diverse elements, creating a seamless symphony in the complex tapestry of our interconnected world. A tranquil balance, a modern alignment of disparate forces working cohesively to produce a unified and resonant whole.</p>
        </div>
        <div className="col-span-2 -translate-y-20 laptop:translate-y-0">
          <img src="/white_statue.png" alt="Silent Dialogues Painting" draggable={false} className="fill"/>
        </div>
       </section>

       {/* Buy Tickets Section */}
       <section className="w-full h-fit grid tablet:grid-cols-3 grid-cols-2 mt-[50vh]">
       <div className="col-span-1 items-end flex justify-start pr-2 h-fit">
        <img src="/door.png" alt="door" className="aspect-[9/19] max-h-[596px]"draggable={false} />
        </div>
       <div className="self-center items-center col-span-1 tablet:col-start-3 col-start-2 pl-2">
       <InTextButton mainText={"Visit Exhibition"} subText={"Book Tickets"} link={"https://adtimokhin.me/"}/>
      </div>
      </section>
    </div>
  );
}
