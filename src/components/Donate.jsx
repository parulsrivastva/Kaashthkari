import Image from "next/image"
import "../styles/donate.css"
const Donate = () => {
  return (
    <div className="donate">
      <div className="d-img">
        {/* <Image src={"/donate.gif"} fill={"cover"} style={{ width: "100%" }} /> */}
      </div>
      <div className="d-cnt">
        <h2>DONATE</h2>
        <h3>FOR A GOOD</h3>
        <h2>CAUSE!</h2>
      </div>
    </div>
  )
}

export default Donate
