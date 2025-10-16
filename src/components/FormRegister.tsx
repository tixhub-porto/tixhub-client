"use client";
import styles from "@css/login/login.module.css";
import loketImage from "@images/loket.png";
import Image from "next/image";
import Form from 'next/form'
import React, { useState } from "react";
import axios from "axios";

interface FormRegisterProps {
    onToggle: () => void;
}

export default function FormRegister({ onToggle }: FormRegisterProps) {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

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
                if (data.token) {
                    localStorage.setItem("token", data.token);
                }

                // Redirect to dashboard
                window.location.href = "/login";
            }

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className={styles.bigContainer}>
            <div className={styles.containerForm}>
                <div className={styles.formLogin}>
                    <h1>Register</h1>
                    <Form onSubmit={handleSubmit} action="">
                        <span>Please Enter Your Details</span>
                        <input name="email" placeholder="Email" />
                        <input name="password" placeholder="Password" />
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
