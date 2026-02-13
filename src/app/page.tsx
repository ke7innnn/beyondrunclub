import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import GridSection from "@/components/GridSection/GridSection";
import EventSection from "@/components/EventSection/EventSection";
import PastEventsSection from "@/components/PastEventsSection/PastEventsSection";
import MapSection from "@/components/MapSection/MapSection";
import SignUpSection from "@/components/SignUpSection/SignUpSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <div id="home">
        <Hero
          type="video"
          src="/bgvid/move.mp4"
          title={`WELCOME,\nRUNNER`}
          subtitle="Casually crushing your comfort zone!"
        />
      </div>

      <div id="gallery">
        <GridSection title="" />
      </div>

      <div id="event">
        <EventSection />
      </div>

      <div id="past-events">
        <PastEventsSection />
      </div>

      <div id="signup">
        <SignUpSection />
      </div>

      <MapSection />
    </main>
  );
}
