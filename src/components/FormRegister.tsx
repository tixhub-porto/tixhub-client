"use client";
import styles from "@css/login/login.module.css";
import loketImage from "@images/loket.png";
import Image from "next/image";
import Form from 'next/form'
import React, { useEffect, useState } from "react";
import axios from "axios";
import GeneralAlert from "./GeneralAlert";

interface FormRegisterProps {
    onToggle: () => void;
}

export default function FormRegister({ onToggle }: FormRegisterProps) {
    const [message, setMessage] = useState("");
    const [href, setHref] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        const formData = new FormData(e.currentTarget)
        const username = formData.get("email") as string
        const password = formData.get("password") as string
        try {
            const response = await axios.post("api/regis", { username, password });

            if (response.status === 200) {
                const data = response.data;
                setMessage(data.Message);
                setHref("/login");
            } else {
                setMessage(response.data.Message);
                setHref("");
            }

        } catch (error: any) {
            setMessage(error.response.data.error);
            setHref("");
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className={styles.bigContainer}>
            {message && <GeneralAlert text={message} imageUrl="/images/padlock.jpg" href={href != "" ? href : ""} />}
            <div className={styles.containerForm}>
                <div className={styles.formLogin}>
                    <h1>Register</h1>
                    <Form onSubmit={handleSubmit} action="">
                        <span>Please Enter Your Details</span>
                        <input name="email" placeholder="Email" />
                        <div className={styles.passwordWrapper}>
                            <input
                                name="password"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                required
                            />
                            <span
                                className={styles.eyeIcon}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ?
                                    <img src="https://cdn-icons-png.flaticon.com/512/4298/4298899.png" alt="" />
                                    :
                                    <img src="https://cdn-icons-png.flaticon.com/512/565/565655.png" alt="" />
                                }
                            </span>
                        </div>
                        <span className={styles.forgotPassword} onClick={onToggle}>Already Have Account?</span>
                        <button className={styles.submitButton}>Register</button>
                    </Form>
                    <div className={styles.quickLogin}>
                        <div className={styles.or}>
                            <hr /> <span>OR</span> <hr />
                        </div>
                        <button className={styles.google}>Google
                        </button>
                    </div>
                </div>
                <Image
                    className={styles.loketImage}
                    src={loketImage}
                    alt="Loket Image"
                    priority
                />
            </div>
        </section>
    );
}
