import styles from "../styles/Shipping.module.css";
import { useState } from "react";
export default function ShippingInfo() {
	var formatter = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "GBP",
	});

	const [shipping1, setShipping1] = useState(6.49);
	const [shipping2, setShipping2] = useState(6.8);
	const [shipping3, setShipping3] = useState(8.09);

	const [nextshipping1, setNextShipping1] = useState(9.0);
	const [nextshipping2, setNextShipping2] = useState(9.2);
	const [nextshipping3, setNextShipping3] = useState(10.49);

	return (
		<div className={styles.additionalInfo}>
			<div className={styles.shippingInfo}>
				<h2>Express Shipping</h2>
				<p>6-12 rotis </p>
				<p>{formatter.format(shipping1)}</p>
				<p>13-19 rotis</p>
				<p>{formatter.format(shipping2)}</p>
				<p>20-40 rotis</p>
				<p>{formatter.format(shipping3)}</p>
				<p className={styles.larger}>Contact us for larger orders</p>
			</div>

			<div className={styles.shippingInfo + " " + styles.guaranteed}>
				<h2> Guaranteed Next Day Shipping</h2>
				<p>6-12 rotis </p>
				<p>{formatter.format(nextshipping1)}</p>
				<p>13-19 rotis</p>
				<p>{formatter.format(nextshipping2)}</p>
				<p>20-40 rotis</p>
				<p>{formatter.format(nextshipping3)}</p>
				<p className={styles.larger}>Guaranteed 12 noon next day</p>
			</div>
		</div>
	);
}
