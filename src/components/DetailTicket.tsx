import styles from "@css/detailticket/detailticket.module.css";

export default function DetailTicket({ ticket }: any) {
    if (!ticket) return <div className={styles.bigContainer}></div>
    return (
        <>
            <section className={styles.bigContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.primaryInfoContainer}>
                        <div className={styles.imageContainer}>
                            <img src={ticket.image} alt="" />
                        </div>
                        <div className={styles.primaryInfo}>
                            <span className={styles.ticketName}>{ticket.name} <span className={styles.ticketVendor}>({ticket.vendor_name})</span></span>
                            <div className={styles.label}>
                                Location:
                                <span className={styles.value}>
                                    {ticket.location}
                                </span>
                            </div>
                            <div className={styles.label}>
                                Date:
                                <span className={styles.value}>
                                    {ticket.date}
                                </span>
                            </div>
                            <div className={styles.label}>
                                Price:
                                <span className={styles.value}>
                                    Rp {ticket.price}
                                </span>
                            </div>
                            <div className={styles.label}>
                                Category:
                                <span className={styles.value}>
                                    {ticket.category}
                                </span>
                            </div>
                            <button className={styles.submitButton}>Beli Tiket</button>
                        </div>
                    </div>
                    <div className={styles.contentDetailContainer}>
                        <div className={styles.sectionInfo}>
                            <span>Description</span>
                            <hr />
                        </div>
                        <div className={styles.description}>
                            <span>{ticket.description}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
