'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@css/landingpage/landingpage.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [event, setEvent] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataEvent = async () => {
      try {
        const res = await axios.get("/api/event")
        console.log("🚀 ~ fetchDataEvent ~ res.data.data:", res.data.data)
        setEvent(res.data.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchDataEvent();
  }, [])


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
            <span className={styles.eventTitle}>Find Your Next Experience</span>
            <span>Discover events happening near you, from concerts to sports games and more.</span>
            <div className={styles.searchContainer}>
              <input type="text" className={styles.searchInput} placeholder="Search Events, Venues, and more" />
            </div>
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
            {loading ? (
              <p>Loading events...</p>
            ) : event.length === 0 ? (
              <p>No events found</p>
            ) : (
              <div className={styles.cardContainer}>
                {event.map((e, i) => (
                  <div key={i} className={styles.card} style={{ "--image-url": `url(${e.image})` } as React.CSSProperties}>
                    <div className={styles.cardContent}>
                      <p className={styles.cardDescription}>{e.description || "No description"}</p>
                      <button className={`ticketButton ${styles.ticketButtonCard}`}>Buy Ticket</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
