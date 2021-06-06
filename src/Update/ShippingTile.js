import styles from "../../styles/ShippingTile.module.css";
import { useState } from "react";

export default function ShippingTile() {
	var formatter = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "GBP",
	});

	const [shipping1, setShipping1] = useState(5.89);
	const [shipping2, setShipping2] = useState(6.2);
	const [shipping3, setShipping3] = useState(7.49);

	const [nextshipping1, setNextShipping1] = useState(8.4);
	const [nextshipping2, setNextShipping2] = useState(8.6);
	const [nextshipping3, setNextShipping3] = useState(9.89);
	return (
		<div className={styles.container}>
			<div className={styles.shippingInfo}>
				<h2>Express Shipping</h2>
				<p>5-12 rotis </p>
				<p>{formatter.format(shipping1)}</p>
				<p>13-19 rotis</p>
				<p>{formatter.format(shipping2)}</p>
				<p>20-40 rotis</p>
				<p>{formatter.format(shipping3)}</p>
				<p className={styles.larger}>Contact us for larger orders</p>
			</div>
		</div>
	);
}
