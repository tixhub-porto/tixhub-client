'use client'
import { useLoading } from "@/context/LoadingContext";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "@css/profile/profile.module.css";
import EditInfoUser from "@/components/EditInfoUser";
import Tickets from "@/components/Ticket";

export default function Profile() {
    const { loading, setLoading } = useLoading()
    const [message, setMessage] = useState("")
    const [userData, setUserData] = useState()
    const [menuActive, setMenuActive] = useState("personal")
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true)
                const token = localStorage.getItem("token")

                const response = await axios.get("/api/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                setUserData(response.data)
            } catch (error: any) {
                setMessage(error.response?.data?.error || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchProfile()
    }, [])
    if (loading == true) return <></>
    return (
        <>
            <section className={styles.sectionProfile}>
                <div className={styles.profileContainer}>
                    <div className={styles.infoLeftContainer}>
                        <span
                            className={menuActive === "personal" ? "is-active" : ""}
                            onClick={() => setMenuActive("personal")}
                        >
                            Personal Information
                        </span>

                        <span
                            className={menuActive === "order" ? "is-active" : ""}
                            onClick={() => setMenuActive("order")}
                        >
                            Order History
                        </span>
                    </div>
                    <div className={styles.infoRightContainer}>
                        {menuActive === "personal" && <EditInfoUser />}
                        {menuActive === "order" &&
                            <div className={styles.containerTickets}>
                                <Tickets />
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}