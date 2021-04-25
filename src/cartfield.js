import styles from "../styles/cart.module.css";
import { useState, usEffect } from "react";
export default function Cartfield({
	option1,
	option2,
	total1,
	total2,
	total,
	name1,
	name2,
	quantity,
	nextDay,
}) {
	var formatter = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "GBP",

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

	const [shipping1, setShipping1] = useState(5.89);
	const [shipping2, setShipping2] = useState(6.2);
	const [shipping3, setShipping3] = useState(7.49);

	const [nextshipping1, setNextShipping1] = useState(8.4);
	const [nextshipping2, setNextShipping2] = useState(8.6);
	const [nextshipping3, setNextShipping3] = useState(9.89);

	return (
		<div className={styles.container}>
			{option1 == 0 || option1 == null ? null : (
				<div className={styles.cartoption}>
					<p>{name1}</p>
					<p>Quantity: {option1}</p>
					<p>Price: {formatter.format(total1)}</p>
				</div>
			)}
			{option2 == 0 || option2 == null ? null : (
				<div className={styles.cartoption}>
					<p>{name2}</p>
					<p>Quantity: {option2}</p>
					<p>Price: {formatter.format(total2)}</p>
				</div>
			)}

			{(option1 == 0 || option1 == null) &&
			(option2 == 0 || option2 == null) ? null : (
				<div className={styles.total}>
					<p>Cost: {formatter.format(total)}</p>
					<p>Quantity: {Number(option1) + Number(option2)}</p>
					<p>
						Shipping:{" "}
						{quantity >= 5 && quantity <= 12 && !nextDay
							? formatter.format(shipping1)
							: quantity >= 13 && quantity <= 19 && !nextDay
							? formatter.format(shipping2)
							: quantity >= 20 && quantity <= 40 && !nextDay
							? formatter.format(shipping3)
							: quantity >= 5 && quantity <= 12 && nextDay
							? formatter.format(nextshipping1)
							: quantity >= 13 && quantity <= 19 && nextDay
							? formatter.format(nextshipping2)
							: quantity >= 20 && quantity <= 40 && nextDay
							? formatter.format(nextshipping3)
							: null}
					</p>
				</div>
			)}
		</div>
	);
}
