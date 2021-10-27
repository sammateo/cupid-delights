import { useState } from "react";
import styles from "../styles/Options.module.css";
export default function Options({
	checkout,
	name1,
	name2,
	name3,
	option1,
	option2,
	option3,
	price1,
	price2,
	price3,
	total,
	total1,
	total2,
	total3,
	shipping1,
	shipping2,
	shipping3,
	nextshipping1,
	nextshipping2,
	nextshipping3,
	shipping,
	nextDay,
	quantity,
	setCheckout,
	setOption1,
	setOption2,
	setOption3,
	setPrice1,
	setPrice2,
	setPrice3,
	setTotal,
	setTotal1,
	setTotal2,
	setTotal3,
	setShipping1,
	setShipping2,
	setShipping3,
	setNextShipping1,
	setNextShipping2,
	setNextShipping3,
	setShipping,
	setNextDay,
	setQuantity,
}) {
	// const [checkout, setCheckout] = useState(false);
	// let option1 =0;
	var formatter = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "GBP",
	});

	function add(event) {
		setCheckout(false);
		if (event.target.name == "option1") {
			event.target.value++;
			setOption1(event.target.value);
			setTotal1(total1 + price1);
			setTotal(total + price1);
			setQuantity(quantity + 1);
		}

		if (event.target.name == "option2") {
			event.target.value++;
			setOption2(event.target.value);
			setTotal2(total2 + price2);
			setTotal(total + price2);
			setQuantity(quantity + 1);
		}
		if (event.target.name == "option3") {
			event.target.value++;
			setOption3(event.target.value);
			setTotal3(total3 + price3);
			setTotal(total + price3);
			setQuantity(quantity + 1);
		}
	}

	function minus(event) {
		setCheckout(false);
		if (event.target.name == "option1" && option1 > 0) {
			event.target.value--;
			setOption1(event.target.value);
			setTotal1(total1 - price1);
			setTotal(total - price1);
			setQuantity(quantity - 1);
		}

		if (event.target.name == "option2" && option2 > 0) {
			event.target.value--;
			setOption2(event.target.value);
			setTotal2(total2 - price2);
			setTotal(total - price2);
			setQuantity(quantity - 1);
		}
		if (event.target.name == "option3" && option3 > 0) {
			event.target.value--;
			setOption3(event.target.value);
			setTotal3(total3 - price3);
			setTotal(total - price3);
			setQuantity(quantity - 1);
		}
	}

	// function checkoutFunc() {
	// 	if (quantity < 5) {
	// 		alert("Minimum order is 5 roti skins");
	// 		setCheckout(false);
	// 	}
	// 	if (quantity >= 5 && quantity <= 12) {
	// 		nextDay ? setShipping(nextshipping1) : setShipping(shipping1);
	// 		setCheckout(true);
	// 	}
	// 	if (quantity >= 13 && quantity <= 19) {
	// 		nextDay ? setShipping(nextshipping2) : setShipping(shipping2);
	// 		setCheckout(true);
	// 	}
	// 	if (quantity >= 20 && quantity <= 40) {
	// 		nextDay ? setShipping(nextshipping3) : setShipping(shipping3);
	// 		setCheckout(true);
	// 	}

	// 	if (quantity > 40) {
	// 		alert("Contact us for orders larger than 40 roti skins");
	// 		setCheckout(true);
	// 	}
	// }

	// function changeShipType(event) {
	// 	setCheckout(false);
	// 	event.target.id == "nextDay" ? setNextDay(true) : setNextDay(false);
	// 	// console.log(nextDay)
	// }

	return (
		<div className={styles.options}>
			<span>{formatter.format(price1)}</span>
			<p>{name1}</p>{" "}
			<button
				name="option1"
				value={option1}
				onClick={add}
				className="plusbutton"
			>
				{" "}
				+{" "}
			</button>{" "}
			<button
				name="option1"
				onClick={minus}
				value={option1}
				className="minusbutton"
			>
				{" "}
				-{" "}
			</button>
			<br></br>
			<span>{formatter.format(price2)}</span>
			<p>{name2}</p>{" "}
			<button
				value={option2}
				name="option2"
				onClick={add}
				className="plusbutton"
			>
				{" "}
				+{" "}
			</button>{" "}
			<button
				name="option2"
				onClick={minus}
				value={option2}
				className="minusbutton"
			>
				{" "}
				-{" "}
			</button>
			{/* Buss Up Shot */}
			<br></br>
			<span>{formatter.format(price3)}</span>
			<p>{name3}</p>{" "}
			<button
				value={option3}
				name="option3"
				onClick={add}
				className="plusbutton"
			>
				{" "}
				+{" "}
			</button>{" "}
			<button
				name="option3"
				onClick={minus}
				value={option3}
				className="minusbutton"
			>
				{" "}
				-{" "}
			</button>
		</div>
	);
}
