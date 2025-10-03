'use client';
import styles from "@css/navbar/navbar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        if (menuOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            document.body.dataset.scrollY = `${scrollY}`;
        } else {
            const scrollY = document.body.dataset.scrollY || 0;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, parseInt(`${scrollY}`));
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile === null) {
        return null;
    }

    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (<>
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
                <img src="images/logo.png" alt="Logo" />
            </Link>
            {isMobile && (
                <div className={styles.burgerIcon} onClick={toggleMenu}>
                    <span className={menuOpen ? styles.show : ""}>☰</span>
                </div>
            )}
            <div className={styles.navLinks + " " + (menuOpen ? styles.show : "")}>
                <div className={styles.links}>
                    <a href="#" className="is-active">Home</a>
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/more-than.png" alt="more-than" />
                </div>
                <div className={styles.links}>
                    <a href="#">Categories</a>
                    <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png" alt="more-than" />
                </div>
                <div className={styles.links}>
                    <a href="#">My Tickets</a>
                    <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png" alt="more-than" />
                </div>
                <div className={styles.links}>
                    <a href="/about">About</a>
                    <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png" alt="more-than" />
                </div>
                {isMobile && (
                    <a className={`${styles.loginButton} ticketButton`}>Login</a>
                )}
            </div>
            {!isMobile && (
                <div className={styles.username}>
                    <a href="/login">Login</a>
                </div>
            )}
        </nav>

        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
    );
}