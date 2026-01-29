'use client'
import { useCategory } from "@/context/CategoryContext";
import { useEvent } from "@/context/EventContext";
import { useLoading } from "@/context/LoadingContext";
import styles from "@css/landingpage/landingpage.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { events, loading: eventLoading } = useEvent();
  const { category, loading: categoryLoading } = useCategory();
  const { setLoading } = useLoading()
  useEffect(() => {
    setLoading(eventLoading || categoryLoading);
  }, [eventLoading, categoryLoading, setLoading]);

  return (
    <>
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
            <div className={styles.cardContainer}>
              {events.map((e, i) => (
                <div key={i} className={styles.card} style={{ "--image-url": `url(${e.image})` } as React.CSSProperties}>
                  <div className={styles.cardContent}>
                    <p className={styles.cardDescription}>{e.description || "No description"}</p>
                    <Link href={`/tickets/${e.id_event}`} className={`ticketButton ${styles.ticketButtonCard}`} >Buy Ticket</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );

}
