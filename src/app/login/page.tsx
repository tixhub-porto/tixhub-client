import styles from "../../public_assets/css/login/login.module.css";
import loketImage from "../../public_assets/images/loket.png";
import Image from "next/image";
import Form from 'next/form'

export default function Login() {
  return (
    <section className={styles.bigContainer}>
      <div className={styles.containerForm}>
        <div className={styles.formLogin}>
          <h1>Log in / Register</h1>
          <Form action="">
            <span>Please Enter Your Details</span>
            <input name="Email" placeholder="Email" />
            <input name="password" placeholder="Password" />
            <span className={styles.forgotPassword}>Forgot Password</span>
            <button className={styles.submitButton}>Login</button>
          </Form>
          <div className={styles.quickLogin}>
            <div className={styles.or}>
              <hr /> <span>OR</span> <hr />
            </div>
            <button className={styles.google}>Google
            </button>
            <button className={styles.apple}>Apple
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
