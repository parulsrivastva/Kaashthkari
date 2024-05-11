import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Collage from "@/components/Collage";
import Persons from "@/components/Persons";
import GovScheme from "@/components/GovScheme";
import Donate from "@/components/Donate";
import SideImage from "@/components/SideImage";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <SideImage imgSrc={"/ele.png"} alignImg={'end'}/>
      <Collage/>
      <Persons/>
      <SideImage imgSrc={"/tiger-bird.png"} alignImg={'start'} />
      <GovScheme/>
      <Donate/>
    </main>
  );
}
