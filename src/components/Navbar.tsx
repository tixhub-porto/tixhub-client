import styles from "@css/navbar/navbar.module.css";
export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src="images/logo.png" alt="Logo" />
            </div>
            <div className={styles.navLinks}>
                <a href="#" className="is-active">Home</a>
                <a href="#">Ticket</a>
                <a href="#">About Us</a>
            </div>
            <div className={styles.username}>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}