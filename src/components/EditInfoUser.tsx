import styles from "@css/profile/profile.module.css";
export default function EditInfoUser() {
    return (
        <>
            <div className={styles.topInformation}>
                <span className={styles.title}>Personal Information</span>
                <button className={styles.buttonEdit}>
                    <div className={styles.imgWrapper1}>
                        <div className={styles.imgWrapper}>
                            <img src="https://cdn-icons-png.flaticon.com/512/1040/1040228.png" alt="" />
                        </div>
                    </div>
                    <span>Edit</span>
                </button>
            </div>
            <div className={styles.imageUserContainer}>
                <img src="https://cdn-icons-png.flaticon.com/512/1040/1040228.png" alt="" className={styles.editImg} />
                <img src="https://img.freepik.com/free-photo/happy-cheerful-female-customer-posing-camera_74855-2837.jpg?t=st=1770183780~exp=1770187380~hmac=e4a3878794a04746466824b976cf040609090198e722f2674e2315158d2ba258&w=1480" alt="" className={styles.profileImage} />
            </div>
            <div className={styles.mainInfoUser}>
                <form action="" className={styles.infoUserForm}>
                    <div className={styles.groupInput}>
                        <div className={styles.inputForm}>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className={styles.inputForm}>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                    <div className={styles.groupInput}>
                        <div className={styles.inputForm}>
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className={styles.inputForm}>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="" />
                        </div>
                    </div>

                    <div className={styles.groupInput}>
                        <div className={styles.inputForm}>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className={styles.inputForm}>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}