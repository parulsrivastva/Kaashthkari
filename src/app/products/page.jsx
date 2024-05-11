"use client"
import "@/styles/products.css"
import { useRef } from "react"

const Produts = () => {
  const productJson = [
    {
      heading: `Buyer's Choice`,
      image: [
        "/product/dc3.png",
        "/product/dc2.png",
        "/product/m1.png",
        "/product/u1.png",
        "/product/bc1.png",
        "/product/bc2.png",
        "/product/bc3.png",
      ],
    },
    {
      heading: "Decorative",
      image: [
        "/product/dc1.png",
        "/product/dc2.png",
        "/product/dc3.png",
        "/product/d4.jpg",
        "/product/d6.jpg",
        "/product/d8.jpg",
      ],
    },
    {
      heading: "Mythological",
      image: [
        "/product/m1.png",
        "/product/m2.png",
        "/product/m3.png",
        "/product/m4.jpg",
        "/product/m5.jpg",
        "/product/m6.jpg",
        "/product/m7.jpg",
      ],
    },
    {
      heading: "Utility",
      image: [
        "/product/u1.png",
        "/product/u2.png",
        "/product/u3.png",
        "/product/u4.jpg",
        "/product/u5.jpg",
        "/product/u6.jpg",
      ],
    },
  ]

  return (
    <div className="products">
      <div className="b-img">
        <img src="/banaras-img.png" alt="" />
      </div>
      {/* <div className="items">
        {productJson.map((e, k) => {
          return (
            <div className="box" key={k}>
              <h2>{e.heading}</h2>
              <div className="wrapper">
                <div className="card-box">
                  {e.image.map((img, kk) => {
                    return (
                      <>
                        <div className="cards" key={kk}>
                          <div className="card">
                            <img src={img} alt="" />
                          </div>
                          <div className="card">
                            <img src={img} alt="" />
                          </div>
                          <div className="card">
                            <img src={img} alt="" />
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div> */}
      {productJson.map((item, ee) => {
        return (
          <div className="it-box" key={ee}>
            <h2>{item.heading}</h2>
            <div className="card-img-box">
              {item.image.map((img, ie) => {
                return (
                  <div className="card-img" key={ie}>
                    <img src={img} alt="" />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Produts
