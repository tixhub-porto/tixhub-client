import styles from "@css/profile/profile.module.css";
export default function PaymentMethodForm() {
    return (
        <>
            <div className={styles.topInformation}>
                <span className={styles.title}>Payment Method</span>
                <button className={styles.buttonEdit}>
                    <div className={styles.imgWrapper1}>
                        <div className={styles.imgWrapper}>
                            <img src="https://cdn-icons-png.flaticon.com/512/1040/1040228.png" alt="" />
                        </div>
                    </div>
                    <span>Edit</span>
                </button>
            </div>
            <div className={styles.categoryPaymentMethod}>
                <div className={styles.paymentMethod}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2625/2625610.png" alt="Credit Card" />
                    <span>Credit Card</span>
                </div>
                <div className={styles.paymentMethod}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" alt="Bank Account" />
                    <span>Bank Account</span>
                </div>
                <div className={styles.paymentMethod}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5674/5674793.png" alt="E-Wallet" />
                    <span>E-Wallet</span>
                </div>
            </div>
            <div className={styles.mainInfoUser}>
                <form action="" className={styles.infoUserForm}>
                    <div className={styles.inputForm}>
                        <label htmlFor="">Card Information</label>
                        <input type="text" placeholder="1234 3456 3422" />
                    </div>
                    <div className={styles.groupInput}>
                        <div className={styles.inputForm}>
                            <label htmlFor="">Month / Year</label>
                            <input type="text" placeholder="MM / YY" />
                        </div>
                        <div className={styles.inputForm}>
                            <label htmlFor="">CVC</label>
                            <input type="password" placeholder="" />
                        </div>
                    </div>

                    <div className={styles.inputForm}>
                        <label htmlFor="">Cardholder Name</label>
                        <input type="text" placeholder="" />
                    </div>
                </form>
            </div>
        </>
    )
}