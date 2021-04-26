import Head from "next/head";
import styles from "../styles/Home.module.css";
//import Image from 'next/image'
import Cartfield from "../src/cartfield.js";
import { useState } from "react";
import Link from "next/link";
import { init } from "emailjs-com";
import Confirm from "../src/confirm";
import ShippingInfo from "../src/ShippingInfo";
import Options from "../src/Options";
import Content from "../src/Content";
import ShippingType from "../src/ShippingType";
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
	const [option1, setOption1] = useState(0); //quantity of option1
	const [option2, setOption2] = useState(0); //quantity of option2
	const [price1, setPrice1] = useState(2);
	const [price2, setPrice2] = useState(3);
	const [total, setTotal] = useState(0);
	const [total1, setTotal1] = useState(0);
	const [total2, setTotal2] = useState(0);
	const [shipping1, setShipping1] = useState(5.89);
	const [shipping2, setShipping2] = useState(6.2);
	const [shipping3, setShipping3] = useState(7.49);

	const [nextshipping1, setNextShipping1] = useState(8.4);
	const [nextshipping2, setNextShipping2] = useState(8.6);
	const [nextshipping3, setNextShipping3] = useState(9.89);

	const [shipping, setShipping] = useState(0);

	const [nextDay, setNextDay] = useState(null);
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
			<ShippingInfo></ShippingInfo>
			<Content
				checkout={checkout}
				name1={name1}
				name2={name2}
				option1={option1}
				option2={option2}
				price1={price1}
				price2={price2}
				total={total}
				total1={total1}
				total2={total2}
				shipping1={shipping1}
				shipping2={shipping2}
				shipping3={shipping3}
				nextshipping1={nextshipping1}
				nextshipping2={nextshipping2}
				nextshipping3={nextshipping3}
				shipping={shipping}
				nextDay={nextDay}
				quantity={quantity}
				setCheckout={setCheckout}
				setOption1={setOption1}
				setOption2={setOption2}
				setPrice1={setPrice1}
				setPrice2={setPrice2}
				setTotal={setTotal}
				setTotal1={setTotal1}
				setTotal2={setTotal2}
				setShipping1={setShipping1}
				setShipping2={setShipping2}
				setShipping3={setShipping3}
				setNextShipping1={setNextShipping1}
				setNextShipping2={setNextShipping2}
				setNextShipping3={setNextShipping3}
				setShipping={setShipping}
				setNextDay={setNextDay}
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
		</div>
	);
}

export default Home;
