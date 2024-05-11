import Heading from "@/components/h1"
import "@/styles/banaras.css"
const Banaras = () => {
  return (
    <div className="banaras">
      <div className="b-img">
        <img src="/banaras.png" alt="" />
      </div>
      <div className="kashi">
        <img src="/kashi.png" alt="" />
        <p>
          Varanasi, also known as Kashi is a significant city for Hindus,
          holding a central role in Indian religious beliefs and considered one
          of the holiest cities. The word Kashi originated from the word kas
          which means the shine. The city also has a rich tradition of classical
          music, particularly Hindustani classical music. Renowned musicians and
          artists are associated with the city, and music and dance performances
          are regularly held in various temples and cultural centers. It is also
          said to be Maa Annapurna s city, where no one ever goes hungry.
        </p>
      </div>
      <div className="story">
        <Heading text={"STORY BEHIND THE GATE"} />
        <div className="kashi">
          <div className="video">
            <img src="/banaras-video.gif" alt="" />
          </div>
          <p>
            Legend says that the city is also often referred to as AanandaVana,
            or the forest of bliss. It is a name that truly describes the
            essence of Kashi. This is the forest of bliss where Tulsi Das met
            Hanumana, Kabir Das met his guru, Trailanga Swami found his adobe,
            Bismillah Khan played Shehnai, and so on. From this forest of bliss
            originated the magnificent doors of Kashi, each adorned with
            carvings that hold stories of centuries untold.
          </p>
        </div>
      </div>
      <div className="history">
        <div className="his-head">
          <img src="/animal-ele.png" alt="" />
          <h1>
            HISTORY OF BANARAS WOOD <br />
            CARVING
          </h1>
          <img src="/animal2.png" alt="" />
        </div>
        <p>
          Since the 16th century, Banaras has been known for its impressive wood
          carving art form. Skilled craftsmen create intricate designs that have
          been passed down through generations. Artisans typically learn their
          techniques from family members or local masters, contributing to the
          rich cultural heritage of Banaras. Since the city is one of the oldest
          living cities in the world, it is difficult to pinpoint the exact
          origin of this craft. As Dr. Rajnikant said, Kashi ka Shilp utna hi
          purana hai jitna ki Kashi.
          <br /> <br />
          Initially, wood carving was an ivory business. However, when ivory was
          banned in India in 1986 under The Wildlife Protection Act (1972), many
          artisans lost their source of livelihood and turned to wood carving
          instead. They worked with a variety of woods, with Chandan
          (sandalwood) becoming the most popular due to its fine fibers and
          termite resistance. When sandalwood cutting was also banned, artisans
          switched to other alternatives and eventually settled on Kaima wood
          (also known as Haldu).
        </p>
      </div>
      <div className="boat">
        <img src="/boat.png" alt="" />
      </div>
    </div>
  )
}

export default Banaras
