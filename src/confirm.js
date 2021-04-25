import styles from "../styles/confirm.module.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import react from "react";
//init("user_I8maVpumJJ5NPgSnOdsDM");
init("user_0452qsSu7KBjTA92mFxpX");

export default function Confirm({
	option1,
	option2,
	price1,
	price2,
	total1,
	total2,
	total,
	name1,
	name2,
	quantity,
	shipping,
	nextDay,
}) {
	var formatter = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "GBP",
	});

	let body =
		"Order: " +
		option1 +
		" of " +
		name1 +
		"(s)" +
		" @ " +
		formatter.format(price1) +
		" |\n" +
		option2 +
		" of " +
		name2 +
		"(s)" +
		" @ " +
		formatter.format(price2) +
		" |\n" +
		"Cost: " +
		formatter.format(total) +
		" |\n" +
		"Quantity: " +
		quantity +
		" |\n" +
		"Shipping: " +
		formatter.format(shipping) +
		" |\n" +
		"Total: " +
		formatter.format(Number(total + shipping));

	function sendEmail(e) {
		e.preventDefault();
		alert("A confirmation email will be sent");
		emailjs
			.sendForm(
				"service_hl0g155",
				"template_o3jrnhw",
				e.target,
				"user_0452qsSu7KBjTA92mFxpX"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<div>
			<form className={styles.form} onSubmit={sendEmail}>
				<p id="form">Shipping</p>
				<label>Name</label>
				<input type="text" name="to_name" required />
				<label>Phone Number</label>
				<input type="tel" name="contact_number" required />
				<label>Email</label>
				<input type="email" name="to_email" required />
				<label>Address</label>
				<input type="text" name="address" required />
				<label>Country</label>
				<input type="text" name="country" required />
				<label>Order</label>
				<textarea name="message" value={body} readOnly />
				<label>Additional Info</label>
				<textarea name="addInfo" placeholder="Notes for order" />
				<button type="submit" value="Send" className={styles.button}>
					Submit
				</button>
			</form>
		</div>
	);
}
