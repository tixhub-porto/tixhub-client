import styles from "@css/detailticket/detailticket.module.css";

export default function DetailTicket({ ticket }: any) {
    if (!ticket) return <div className={styles.bigContainer}></div>
    return (
        <>
            <section className={styles.bigContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        <div className={styles.imageContainer}>
                            <img src={ticket.image} alt="" />
                        </div>
                        <div className={styles.contentDetail}>
                            <h1>{ticket.title}</h1>
                            <p>Tanggal: {ticket.date}</p>
                            <p>Harga: Rp {ticket.price}</p>
                            <p>{ticket.description}</p>
                            <button className={styles.submitButton}>Beli Tiket</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
