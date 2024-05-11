import React from "react"
import "../styles/sideimage.css"
import Image from "next/image"

const SideImage = ({ imgSrc, alignImg }) => {
  return (
    <div className="side-img" style={{ justifyContent: alignImg }}>
      <div className="s-img">
      <Image src={imgSrc} fill={'cover'} style={{width: '100%'}}/>
      </div>
    </div>
  )
}

export default SideImage
