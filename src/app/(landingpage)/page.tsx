import Navbar from "@/components/Navbar";
import styles from "@css/landingpage/landingpage.module.css";

export default function Home() {
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
              <div className={styles.categoryCard + " " + styles.concert}>
                <p className={styles.categoryCardDescription}>
                  Concert
                </p>
              </div>
              <div className={styles.categoryCard + " " + styles.festival}>
                <p className={styles.categoryCardDescription}>
                  Festival
                </p>
              </div>
              <div className={styles.categoryCard + " " + styles.theater}>
                <p className={styles.categoryCardDescription}>
                  Theater
                </p>
              </div>
              <div className={styles.categoryCard + " " + styles.art}>
                <p className={styles.categoryCardDescription}>
                  Art
                </p>
              </div>
              <div className={styles.categoryCard + " " + styles.business}>
                <p className={styles.categoryCardDescription}>
                  Business
                </p>
              </div>
              <div className={styles.categoryCard + " " + styles.sport}>
                <p className={styles.categoryCardDescription}>
                  Sport
                </p>
              </div>
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
