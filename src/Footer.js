import styles from "../styles/Footer.module.css";
import Link from "next/link";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h3>Contact Information</h3>
        <p>Call/Whatsapp</p>
        {/* <span><a href="tel:+44 7432 577502">+44 7432 577502</a></span> */}
        <span>
          <a href="https://wa.me/447432577502">+44 7432 577502</a>
        </span>
        <p>Email</p>
        <p>
          <a href="mailto:cupidelights@gmail.com"> cupidelights@gmail.com</a>
        </p>
        {/* <p>Whatsapp +44 7432 577502</p> */}
        <a
          href="https://www.facebook.com/Cupid-Delights-103544264841798/?tn-str=k*F"
          target="_blank"
        >
          Facebook
        </a>
        <br></br>
        <a href="https://www.instagram.com/cupidelights/?hl=en" target="_blank">
          <img src="/ig.png" width={20} height={20}></img>
        </a>
      </div>

      <p>
        Cupid Delights aims to satisfy your taste buds &amp; give you a taste of
        "home" with our delicious roti skins delivered straight to your door via
        our swift postal service.
      </p>
    </div>
  );
}
