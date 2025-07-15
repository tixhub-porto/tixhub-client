import Navbar from "@/components/Navbar";
import styles from "@css/landingpage/landingpage.module.css";
import Link from "next/link";

export default function Home() {
  const category = [{
    label: "Concert",
    image: "https://img.icons8.com/3d-fluency/94/rock-music.png",
  }, {
    label: "Festival",
    image: "https://img.icons8.com/3d-fluency/94/circus-tent.png",
  }, {
    label: "Art",
    image: "https://img.icons8.com/3d-fluency/94/paint-palette.png",
  }, {
    label: "Sport",
    image: "https://img.icons8.com/3d-fluency/94/football2.png",
  }, {
    label: "Business",
    image: "https://img.icons8.com/3d-fluency/94/analytics.png",
  }, {
    label: "Theater",
    image: "https://img.icons8.com/3d-fluency/94/3d-glasses.png",
  }]
  return (
    <>
      <Navbar />
      <section className={styles.landingPageSection}>
        <div className={styles.mainEventsContainer}>
          <div className={styles.mainEvents}>
            <span className={styles.eventTitle}>New Year Music Event</span>
            <span>Come Join The Event Now</span>
            <button className="ticketButton">Get Ticket Now</button>
          </div>
        </div>
        <div className={styles.categorySection}>
          <div className={styles.categoryContainer}>
            <h1>Category Event</h1>
            <div className={styles.categoryList}>
              {category.map((item, index) => (
                <Link href={`/category/${item.label.toLowerCase()}`} key={index} className={styles.categoryCard + " " + styles[item.label.toLowerCase()]}>
                  <img src={item.image} alt={item.label} />
                  <p className={styles.categoryCardDescription}>
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.listTicketContainer}>
          <div className={styles.listTicket}>
            <h1>Ready to Rock?</h1>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className={`ticketButton ${styles.ticketButtonCard}`}>Buy Ticket</button>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className={`ticketButton ${styles.ticketButtonCard}`}>Buy Ticket</button>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className={`ticketButton ${styles.ticketButtonCard}`}>Buy Ticket</button>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className={`ticketButton ${styles.ticketButtonCard}`}>Buy Ticket</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
