'use client';
import styles from "@css/navbar/navbar.module.css";
import { useState, useEffect } from "react";
export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        menuOpen ? document.body.classList.add("unscroll") : document.body.classList.remove("unscroll");
        return () => {
            document.body.classList.remove("unscroll");
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
            <div className={styles.logo}>
                <img src="images/logo.png" alt="Logo" />
            </div>
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
                    <a href="#">Ticket</a>
                    <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png" alt="more-than" />
                </div>
                <div className={styles.links}>
                    <a href="#">About Us</a>
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