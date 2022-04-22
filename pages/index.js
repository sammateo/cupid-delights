import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import { init } from "emailjs-com";
import ShippingInfo from "../src/ShippingInfo";
import Content from "../src/Content";
import Footer from "../src/Footer";
init("user_I8maVpumJJ5NPgSnOdsDM");

function Home() {
	const [checkout, setCheckout] = useState(false);
	var formatter = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "GBP",
	});
	const name1 = "Plain Roti Skin";
	const name2 = "Dhal Puri Roti Skin";
	const name3 = "Buss Up Shot Roti Skin";
	// const name4 = "Mini Plain Roti Skin";
	// const name5 = "Mini Dhal Puri Roti Skin";
	// const name6 = "Mini Buss Up Shot Roti Skin";

	const [option1, setOption1] = useState(0); //quantity of option1
	const [option2, setOption2] = useState(0); //quantity of option2
	const [option3, setOption3] = useState(0); //quantity of option3
	// const [option4, setOption4] = useState(0);
	// const [option5, setOption5] = useState(0);
	// const [option6, setOption6] = useState(0);

	const [price1, setPrice1] = useState(2); //price in Pound
	const [price2, setPrice2] = useState(3);
	const [price3, setPrice3] = useState(3);
	// const [price4, setPrice4] = useState(1.5);
	// const [price5, setPrice5] = useState(2.5);
	// const [price6, setPrice6] = useState(2.5);

	const [total, setTotal] = useState(0);
	const [total1, setTotal1] = useState(0); //total of each option
	const [total2, setTotal2] = useState(0);
	const [total3, setTotal3] = useState(0);
	// const [total4, setTotal4] = useState(0);
	// const [total5, setTotal5] = useState(0);
	// const [total6, setTotal6] = useState(0);

	const [shipping1, setShipping1] = useState(5.89);
	const [shipping2, setShipping2] = useState(6.2);
	const [shipping3, setShipping3] = useState(7.49);

	const [nextshipping1, setNextShipping1] = useState(8.4);
	const [nextshipping2, setNextShipping2] = useState(8.6);
	const [nextshipping3, setNextShipping3] = useState(9.89);

	const [shipping, setShipping] = useState(0);

	const [nextDay, setNextDay] = useState(false);
	const [quantity, setQuantity] = useState(0);

	// function add(event) {
	// 	setCheckout(false);
	// 	if (event.target.name == "option1") {
	// 		event.target.value++;
	// 		setOption1(event.target.value);
	// 		setTotal1(total1 + price1);
	// 		setTotal(total + price1);
	// 		setQuantity(quantity + 1);
	// 	}

	// 	if (event.target.name == "option2") {
	// 		event.target.value++;
	// 		setOption2(event.target.value);
	// 		setTotal2(total2 + price2);
	// 		setTotal(total + price2);
	// 		setQuantity(quantity + 1);
	// 	}
	// }

	// function minus(event) {
	// 	setCheckout(false);
	// 	if (event.target.name == "option1" && option1 > 0) {
	// 		event.target.value--;
	// 		setOption1(event.target.value);
	// 		setTotal1(total1 - price1);
	// 		setTotal(total - price1);
	// 		setQuantity(quantity - 1);
	// 	}

	// 	if (event.target.name == "option2" && option2 > 0) {
	// 		event.target.value--;
	// 		setOption2(event.target.value);
	// 		setTotal2(total2 - price2);
	// 		setTotal(total - price2);
	// 		setQuantity(quantity - 1);
	// 	}
	// }

	function checkoutFunc() {
		if (quantity < 5) {
			alert("Minimum order is 5 roti skins");
			setCheckout(false);
		}
		if (quantity >= 5 && quantity <= 12) {
			nextDay ? setShipping(nextshipping1) : setShipping(shipping1);
			setCheckout(true);
		}
		if (quantity >= 13 && quantity <= 19) {
			nextDay ? setShipping(nextshipping2) : setShipping(shipping2);
			setCheckout(true);
		}
		if (quantity >= 20 && quantity <= 40) {
			nextDay ? setShipping(nextshipping3) : setShipping(shipping3);
			setCheckout(true);
		}

		if (quantity > 40) {
			alert("Contact us for orders larger than 40 roti skins");
			setCheckout(true);
		}
	}

	function changeShipType(event) {
		setCheckout(false);
		event.target.id == "nextDay" ? setNextDay(true) : setNextDay(false);
		// console.log(nextDay)
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Cupid Delights</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<link rel="icon" href="/logo.jpeg" />
				{/* <script src="https://smtpjs.com/v3/smtp.js"></script> */}
			</Head>

			<div className={styles.title}>
				<h1>Cupid Delights</h1>
				<h4>Made with love</h4>
			</div>
			{/* <h3 className={styles.banner}>
				Closed for Easter holidays, orders will be shipped on 26th April 2022.
			</h3> */}

			<ShippingInfo></ShippingInfo>
			<Content
				checkout={checkout}
				name1={name1}
				name2={name2}
				name3={name3}
				// name4={name4}
				// name5={name5}
				// name6={name6}
				option1={option1}
				option2={option2}
				option3={option3}
				// option4={option4}
				// option5={option5}
				// option6={option6}
				price1={price1}
				price2={price2}
				price3={price3}
				// price4={price4}
				// price5={price5}
				// price6={price6}
				total={total}
				total1={total1}
				total2={total2}
				total3={total3}
				// total4={total4}
				// total5={total5}
				// total6={total6}
				// shipping1={shipping1}
				// shipping2={shipping2}
				// shipping3={shipping3}
				// nextshipping1={nextshipping1}
				// nextshipping2={nextshipping2}
				// nextshipping3={nextshipping3}
				shipping={shipping}
				nextDay={nextDay}
				quantity={quantity}
				setCheckout={setCheckout}
				setOption1={setOption1}
				setOption2={setOption2}
				setOption3={setOption3}
				// setOption4={setOption4}
				// setOption5={setOption5}
				// setOption6={setOption6}
				// setPrice1={setPrice1}
				// setPrice2={setPrice2}
				// setPrice3={setPrice3}
				setTotal={setTotal}
				setTotal1={setTotal1}
				setTotal2={setTotal2}
				setTotal3={setTotal3}
				// setTotal4={setTotal4}
				// setTotal5={setTotal5}
				// setTotal6={setTotal6}
				// setShipping1={setShipping1}
				// setShipping2={setShipping2}
				// setShipping3={setShipping3}
				// setNextShipping1={setNextShipping1}
				// setNextShipping2={setNextShipping2}
				// setNextShipping3={setNextShipping3}
				// setShipping={setShipping}
				// setNextDay={setNextDay}
				setQuantity={setQuantity}
				changeShipType={changeShipType}
				checkoutFunc={checkoutFunc}
			></Content>

			<div className={styles.galleryButtonContainer}>
				<Link href="/gallery">
					<button>To Gallery</button>
				</Link>
			</div>

			<Footer></Footer>
			{/* <div className={styles.mask}>
				<div className={styles.title}>
					<h1>Cupid Delights</h1>
					<p>
						Closed for Easter holidays, orders will be shipped on 26th April
						2022.
					</p>
				</div>
			</div> */}
		</div>
	);
}

export default Home;
