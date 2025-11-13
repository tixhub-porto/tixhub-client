import styles from "@css/loadingscreen/loadingscreen.module.css";

export default function LoadingScreen() {
    const link = "https://shorturl.at/ibJ8X"
    return (
        <>
            <div className={styles.loadingScreenContainer}>
                <div className={styles.loadingContent}>
                    <div className={styles.imageContainer}>
                        <img src={link} alt="" />
                    </div>
                    <p>Loading . . . </p>
                    <div className={styles.barLoading}></div>
                </div>
            </div>
        </>
    );
}