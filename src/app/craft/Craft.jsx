import Image from "next/image"
import React from "react"
import "../../styles/product.css"
import SideImage from "@/components/SideImage"
import Heading from "@/components/h1"

const Craft = () => {
  return (
    <div className="product">
      <video src="/craft-video.mp4" loop autoPlay muted></video>
      {/* Raw material */}
      <div className="raw-material">
        <h1>RAW MATERIAL</h1>

        <div className="materials">
          <div className="materials-dets">
            <Image src={"/kaimawood.png"} width={300} height={200} />
            <h5>Kaima Wood</h5>
          </div>
          <div className="materials-dets">
            <Image src={"/feviKwik.png"} width={60} height={200} />
            <h5>Fevi Kwik</h5>
          </div>
          <div className="materials-dets">
            <Image src={"/sheesham.png"} width={250} height={150} />
            <h5>Sheesham</h5>
          </div>
          <div className="materials-dets">
            <Image src={"/laster.png"} width={60} height={200} />
            <h5>Laster</h5>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="tools">
        <h1>TOOLS</h1>

        <div className="tool-child">
          <div className="tools-left">
            {/* <Image src={"/tool1.png"} height={700} width={900} /> */}
          </div>

          <div className="tools-right">
            <div className="righttool-img">
              <Image src={"/tool3.png"} height={200} width={40} />
              <Image src={"/tool6.png"} height={200} width={40} />
              <Image src={"/tool5.png"} height={200} width={40} />
              <Image src={"/tool4.png"} height={200} width={40} />
              <Image src={"/tool2.png"} height={200} width={40} />
            </div>

            <p>
              Wood carving tools can be divided into two main categories:
              hand-operated tools and machine-operated tools. Hand-operated
              tools are typically used in conjunction with a turning machine,
              whereby the wooden piece is mounted and grooves of various sizes
              are carved onto it. Conversely, machine-operated tools can be
              likened to a pen, which is used to engrave intricate designs onto
              the turned wood.
            </p>

            <div className="sideimg">
              <Image src={"/ele.png"} height={130} width={300} />
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="process">
        <h1>PROCESS</h1>

        <div className="steps">
          <div className="steps-count">
            <Image
              src={"/step1.png"}
              width={100}
              height={100}
              style={{ border: "1px solid black", borderRadius: "50%" }}
            />

            <p>MARKING</p>
          </div>

          <div className="steps-count">
            <Image
              src={"/step2.png"}
              width={100}
              height={100}
              style={{ border: "1px solid black", borderRadius: "50%" }}
            />

            <p>TURNING</p>
          </div>

          <div className="steps-count">
            <Image
              src={"/step3.png"}
              width={100}
              height={100}
              style={{ border: "1px solid black", borderRadius: "50%" }}
            />

            <p>CARVING</p>
          </div>

          <div className="steps-count">
            <Image
              src={"/step4.png"}
              width={100}
              height={100}
              style={{ border: "1px solid black", borderRadius: "50%" }}
            />

            <p>SANDING</p>
          </div>

          <div className="steps-count">
            <Image
              src={"/step5.png"}
              width={100}
              height={100}
              style={{ border: "1px solid black", borderRadius: "50%" }}
            />

            <p>POLISHING</p>
          </div>
        </div>
      </div>

      {/* Final Product */}
      <div className="final-prduct">
        <Heading text={"FINAL PRODUCTS"} />

        <div className="finalproduct-img">
          <Image src={"/prod1.png"} height={180} width={70} />
          <Image src={"/prod2.png"} height={180} width={120} />
          <Image src={"/prod3.png"} height={180} width={120} />
          <Image src={"/prod4.png"} height={180} width={120} />
        </div>

        <h5>VIEW MORE</h5>
      </div>

      {/* Flower */}
      <div className="flower">
        <Image src={"/flower.png"} width={200} height={300} />
        <p>
          One of the most unique pieces that Banaras Wood Carving is known for
          is the extravagant lotus with an opening mechanism. With a Shivling at
          its heart, the lotus petals bloom into a beautiful flower, with the
          proud Shivling right in the center. Adorned with beautiful carvings of
          animals and other deities, the piece is one-of-a-kind. The piece is
          infact so famous that it is also featured pn the logo of the Banaras
          Wood Carving GI tag. It is the only one with an opeining mechanism,
          wherein people can twist the liver to unwind the flower.
        </p>
      </div>

      {/* Facts */}
      <div className="fact">
        <div className="fact-left">
          <div className="banaras-logo"></div>
          <div className="journey">
            <Heading text={"THE GI JOURNEY"} />

            <p>
              The craft was granted the GI tag in September 2018. To date, 97
              artisans have been registered as authorized users of the tag.
              Additionally, every year, more artisans are authorized and given
              artisan cards. The journey for the craft to gain recognition was
              not easy, but many artisans have persevered and pushed to showcase
              their craft on a global scale.
            </p>
          </div>
        </div>

        <div className="fact-right">
          <h1>Facts!</h1>
          <p style={{ textAlign: "center" }}>
            The GI Tag for Wood Carving was approved by Dr. Rajnikanth, a 2019
            Padma Shri Awardee who has been tirelessly working for the
            betterment of various crafts in Uttar Pradesh and run Human Welfare
            Association, an institution that has now been awarded with the
            National Intellectual Property Award, giving it the right
            to grant GI Tags.
          </p>
        </div>
      </div>

      {/* Selling Items */}
      <div className="sell">
        <h1 className="pl-2"> OUR HOTTEST SELLING ITEM</h1>
        <div className="sell-item">
          <div className="bottle-i"></div>
          <p>
            Amongst the many Wood Carving items being created, the sindoora is
            one item that is crafted and sold in bulks. One of its many reasons
            is, it is smallest item being produced, that can be bought by laymen
            without making a hole in their pocket. It is also an item with
            utility, which makes it a great gift to anyone.
          </p>
        </div>

        <h2>HELP THE CREATORS! DONATE FOR A CAUSE!</h2>
      </div>
    </div>
  )
}

export default Craft
