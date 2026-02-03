'use client'
import styles from "@css/generalalert/generalalert.module.css";
import { useState } from "react";

type GeneralAlertProps = {
    text: string;
    imageUrl: string
    href?: string
};
export default function GeneralAlert({ text, imageUrl, href }: GeneralAlertProps) {
    const [alertOpen, setAlertOpen] = useState(true);
    const toggleAlert = () => {
        setAlertOpen(!alertOpen);
        if (href && href.trim() !== "") window.location.href = href
    }
    if (!alertOpen) return null;

    return (
        <>
            <div className="overlay" onClick={toggleAlert}></div>
            <section className={styles.alertContainer}>
                <div className={styles.imageContainer}>
                    <img src={imageUrl} alt="alert" />
                </div>
                <p>{text}</p>
                <button className={styles.submitButton} onClick={toggleAlert}>Close</button>
            </section>
        </>
    )
}