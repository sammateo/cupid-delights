import styles from "../styles/confirm.module.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import react from "react";
//init("user_I8maVpumJJ5NPgSnOdsDM");
init("user_0452qsSu7KBjTA92mFxpX");

export default function Confirm({
	option1,
	option2,
	option3,
	option4,
	option5,
	option6,
	price1,
	price2,
	price3,
	price4,
	price5,
	price6,
	total1,
	total2,
	total3,
	total4,
	total5,
	total6,
	total,
	name1,
	name2,
	name3,
	name4,
	name5,
	name6,
	quantity,
	shipping,
	nextDay,
}) {
	var formatter = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "GBP",
	});

	// let discount = total * 0.9;
	let body =
		"Order: \n" +
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
		option3 +
		" of " +
		name3 +
		"(s)" +
		" @ " +
		formatter.format(price3) +
		" |\n" +
		option4 +
		" of " +
		name4 +
		"(s)" +
		" @ " +
		formatter.format(price4) +
		" |\n" +
		option5 +
		" of " +
		name5 +
		"(s)" +
		" @ " +
		formatter.format(price5) +
		" |\n" +
		option6 +
		" of " +
		name6 +
		"(s)" +
		" @ " +
		formatter.format(price6) +
		" |\n" +
		"Cost: " +
		formatter.format(total) +
		// " |\n" +
		// "Vincentian 10% Discounted Cost: " +
		// formatter.format(discount) +
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
		alert("A confirmation email will be sent with payment details");
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
				<label>Postcode</label>
				<input type="text" name="postal" required />
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
