import React from "react"
import "../styles/herosection.css"
import Image from "next/image"
import Heading from "./h1"
const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="h-img">
        <Image
          src={"/hero.png"}
          alt="hero-img"
          fill="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="h-cnt">
        <Heading text={"MEET THE ARTISANS"} />
        <p>
          Varanasi is known for its rich tradition of wood carving, which is an
          art form that has been practiced for many years. The craftsmen of
          Varanasi are highly skilled and create beautiful, intricate wood
          carvings that are often used in furniture, sculptures, decorative
          items, and architectural features. These artisans come from families
          with a long history in the craft, and they pass down their knowledge
          and practices from one generation to the next, ensuring that this
          traditional art form continues to thrive.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
