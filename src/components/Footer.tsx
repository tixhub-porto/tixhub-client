'use client';
import Link from "next/link";
import styles from "@css/footer/footer.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathName = usePathname()
    const isLoginPage = pathName === '/login';
    if (!isLoginPage) {
        return (
            <>
                <div className={styles.footer}>
                    <div className={styles.footerContainer}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={200}
                                height={70}
                            />
                        </Link>
                        <p>Copyright © 2025 TixHub</p>
                    </div>
                    <div className={styles.footerLinksContainer}>
                        <div className={styles.footerLinks}>
                            <h3>Quick Links</h3>
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className={styles.footerLinks}>
                            <h3>Support</h3>
                            <Link href="/">Help Center</Link>
                            <Link href="/">Safety Center</Link>
                            <Link href="/">Community Guidelines</Link>
                        </div>
                        <div className={styles.footerLinks}>
                            <h3>Legal</h3>
                            <Link href="/">Terms of Use</Link>
                            <Link href="/">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}