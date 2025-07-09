import Navbar from "@/components/Navbar";
import styles from "@css/landingpage/landingpage.module.css";

export default function Home() {
  return (
    <section className={styles.landingPageSection}>
      <Navbar />
      <div className={styles.mainEvents}>
        <span className={styles.eventTitle}>New Year Music Event</span>
        <span>Come Join The Event Now</span>
        <button className={styles.ticketButton}>Get Ticket Now</button>
      </div>
    </section>
  );
}
