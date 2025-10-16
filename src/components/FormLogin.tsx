"use client";
import styles from "@css/login/login.module.css";
import loketImage from "@images/loket.png";
import Image from "next/image";
import Form from 'next/form'
import React, { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

interface FormLoginProps {
    onToggle: () => void;
}

export default function FormLogin({ onToggle }: FormLoginProps) {
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
            const response = await axios.post("api/login", { username, password });

            if (response.status === 200) {
                const data = response.data;
                setMessage("Login successful ✅");

                if (data.token) {
                    localStorage.setItem("token", data.token);
                }

                // Redirect to dashboard
                window.location.href = "/";
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
                    <h1>Log in</h1>
                    <Form onSubmit={handleSubmit} action="">
                        <span>Please Enter Your Details</span>
                        <input name="email" placeholder="Email" />
                        <input name="password" placeholder="Password" />
                        <span className={styles.forgotPassword}>Forgot Password</span>
                        <span className={styles.register}>Dont Have Account? <span className={styles.forgotPassword} onClick={onToggle}>Sign Up</span> </span>
                        <button className={styles.submitButton}>Login</button>
                    </Form>
                    <div className={styles.quickLogin}>
                        <div className={styles.or}>
                            <hr /> <span>OR</span> <hr />
                        </div>
                        <button className={styles.google} onClick={() => signIn("google")}>Google
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
