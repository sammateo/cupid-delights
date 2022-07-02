import styles from "../styles/cart.module.css";
import { useState, usEffect } from "react";
export default function Cartfield({
	option1,
	option2,
	option3,
	// option4,
	// option5,
	// option6,
	total1,
	total2,
	total3,
	// total4,
	// total5,
	// total6,
	total,
	name1,
	name2,
	name3,
	// name4,
	// name5,
	// name6,
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

	const [shipping1, setShipping1] = useState(6.49);
	const [shipping2, setShipping2] = useState(6.8);
	const [shipping3, setShipping3] = useState(8.09);

	const [nextshipping1, setNextShipping1] = useState(9.0);
	const [nextshipping2, setNextShipping2] = useState(9.2);
	const [nextshipping3, setNextShipping3] = useState(10.49);

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
			{option3 == 0 || option3 == null ? null : (
				<div className={styles.cartoption}>
					<p>{name3}</p>
					<p>Quantity: {option3}</p>
					<p>Price: {formatter.format(total3)}</p>
				</div>
			)}

			{/* {option4 == 0 || option4 == null ? null : (
				<div className={styles.cartoption}>
					<p>{name4}</p>
					<p>Quantity: {option4}</p>
					<p>Price: {formatter.format(total4)}</p>
				</div>
			)}
			{option5 == 0 || option4 == null ? null : (
				<div className={styles.cartoption}>
					<p>{name5}</p>
					<p>Quantity: {option5}</p>
					<p>Price: {formatter.format(total5)}</p>
				</div>
			)}
			{option6 == 0 || option6 == null ? null : (
				<div className={styles.cartoption}>
					<p>{name6}</p>
					<p>Quantity: {option6}</p>
					<p>Price: {formatter.format(total6)}</p>
				</div>
			)} */}

			{/* // (option4 == 0 || option4 == null) &&
			// (option5 == 0 || option5 == null) &&
			// (option6 == 0 || option6 == null)  */}
			{(option1 == 0 || option1 == null) &&
			(option2 == 0 || option2 == null) &&
			(option3 == 0 || option3 == null) ? null : (
				<div className={styles.total}>
					<p>Cost: {formatter.format(total)}</p>
					<p>Quantity: {quantity}</p>
					<p>
						Shipping:{" "}
						{quantity >= 6 && quantity <= 12 && !nextDay
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
