'use client';
import styles from "@css/navbar/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLogin(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogin(false);
        window.location.href = "/login";
    };

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
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={120}
                    height={40}
                />

            </Link>
            {isMobile && (
                <div className={styles.burgerIcon} onClick={toggleMenu}>
                    <span className={menuOpen ? styles.show : ""}>☰</span>
                </div>
            )}
            <div className={styles.navLinks + " " + (menuOpen ? styles.show : "")}>
                <div className={styles.links}>
                    <a href="/" className={pathname === "/" ? "is-active" : ""}>Home</a>
                    <img width="20" height="20" src={pathname === "/" ? "https://img.icons8.com/ios-filled/50/more-than.png" : "https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png"} alt="more-than" />
                </div>
                <div className={styles.links}>
                    <a href="/categories" className={pathname === "/categories" ? "is-active" : ""}>Categories</a>
                    <img width="15" height="15" src={pathname === "/categories" ? "https://img.icons8.com/ios-filled/50/more-than.png" : "https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png"} alt="more-than" />
                </div>
                {
                    isLogin && (
                        <div className={styles.links}>
                            <a href="#" className={pathname === "/My ticket" ? "is-active" : ""}>My Tickets</a>
                            <img width="15" height="15" src={pathname === "/My ticket" ? "https://img.icons8.com/ios-filled/50/more-than.png" : "https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png"} alt="more-than" />
                        </div>
                    )
                }
                <div className={styles.links}>
                    <a href="/about" className={pathname === "/about" ? "is-active" : ""}>About</a>
                    <img width="15" height="15" src={pathname === "/about" ? "https://img.icons8.com/ios-filled/50/more-than.png" : "https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png"} alt="more-than" />
                </div>
                <div className={styles.links}>
                    <a href="/profile" className={pathname === "/profile" ? "is-active" : ""}>Profile</a>
                    <img width="15" height="15" src={pathname === "/profile" ? "https://img.icons8.com/ios-filled/50/more-than.png" : "https://img.icons8.com/ios-glyphs/30/FFFFFF/more-than.png"} alt="more-than" />
                </div>
                {isMobile && (
                    isLogin ? (
                        <span
                            onClick={handleLogout}
                            className={`${styles.loginButton}  ticketButton`}
                        >
                            Logout
                        </span>
                    ) : (
                        <Link href="/login" className={`${styles.loginButton} ticketButton`}>
                            Login
                        </Link>
                    )
                )}
            </div>
            {!isMobile && (
                <div className={styles.username}>
                    {isLogin ? (
                        <span className={styles.loginButton} onClick={handleLogout}>Logout</span>
                    ) : (
                        <Link className={styles.loginButton} href="/login">Login</Link>
                    )}
                </div>
            )}
        </nav>

        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
    );
}