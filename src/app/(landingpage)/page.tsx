'use client'
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import styles from "@css/landingpage/landingpage.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [event, setEvent] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/event")
        const categoryData = await axios.get("/api/category")
        setCategory(categoryData.data.data)
        setEvent(res.data.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [])


  if (loading) {
    return <LoadingScreen />
  }
  else {
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
                  <Link href={`/category/${item.Category.toLowerCase()}`} key={index} className={styles.categoryCard + " " + styles[item.Category.toLowerCase()]}>
                    <img src={item.Image} alt={item.Category} />
                    <p className={styles.categoryCardDescription}>
                      {item.Category}
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
                <LoadingScreen />
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

}
