'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@css/about/about.module.css";
import Image from "next/image";
import teamImage from "@images/team.png";
import teamImage2 from "@images/team2.png";
import teamImage3 from "@images/team3.png";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";

export default function About() {
    const { setLoading } = useLoading();
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            <section className={styles.aboutPageSection}>
                <div className={styles.aboutTextContainer}>
                    <div className={styles.aboutText + " " + styles.left}>
                        <div className={styles.textBox}>
                            <h1>Who We Are</h1>
                            <p>
                                At TixHub, we are a team of passionate individuals dedicated to providing you with a seamless and enjoyable experience for all your entertainment needs. Our mission is to connect you with the best events, venues, and artists, making your event planning experience as hassle-free as possible.
                            </p>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.loketImage}
                                    src={teamImage}
                                    alt="Team Image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutText + " " + styles.right}>
                        <div className={styles.textBox}>
                            <h1>What We Do</h1>
                            <p>we are a team of passionate individuals dedicated to providing you with a seamless and enjoyable experience for all your entertainment needs. Our mission is to connect you with the best events, venues, and artists, making your event planning experience as hassle-free as possible.
                            </p>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.loketImage}
                                    src={teamImage2}
                                    alt="Team Image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutText + " " + styles.left}>
                        <div className={styles.textBox}>
                            <h1>Why Choose Us</h1>
                            <p>Because we are dedicated to providing you with a seamless and enjoyable experience for all your entertainment needs. Our mission is to connect you with the best events, venues, and artists, making your event planning experience as hassle-free as possible.</p>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.loketImage}
                                    src={teamImage3}
                                    alt="Team Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}