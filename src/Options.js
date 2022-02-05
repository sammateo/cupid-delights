import { useState } from "react";
import styles from "../styles/Options.module.css";
export default function Options({
	// checkout,
	name1,
	name2,
	name3,
	name4,
	name5,
	name6,
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
	total,
	total1,
	total2,
	total3,
	total4,
	total5,
	total6,
	// shipping1,
	// shipping2,
	// shipping3,
	// nextshipping1,
	// nextshipping2,
	// nextshipping3,
	// shipping,
	// nextDay,
	quantity,
	setCheckout,
	setOption1,
	setOption2,
	setOption3,
	setOption4,
	setOption5,
	setOption6,
	// setPrice1,
	// setPrice2,
	// setPrice3,
	setTotal,
	setTotal1,
	setTotal2,
	setTotal3,
	setTotal4,
	setTotal5,
	setTotal6,
	// setShipping1,
	// setShipping2,
	// setShipping3,
	// setNextShipping1,
	// setNextShipping2,
	// setNextShipping3,
	// setShipping,
	// setNextDay,
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
		if (event.target.name == "option4") {
			event.target.value++;
			setOption4(event.target.value);
			setTotal4(total4 + price4);
			setTotal(total + price4);
			setQuantity(quantity + 1);
		}
		if (event.target.name == "option5") {
			event.target.value++;
			setOption5(event.target.value);
			setTotal5(total5 + price5);
			setTotal(total + price5);
			setQuantity(quantity + 1);
		}
		if (event.target.name == "option6") {
			event.target.value++;
			setOption6(event.target.value);
			setTotal6(total6 + price6);
			setTotal(total + price6);
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
		if (event.target.name == "option4" && option4 > 0) {
			event.target.value--;
			setOption4(event.target.value);
			setTotal4(total4 - price4);
			setTotal(total - price4);
			setQuantity(quantity - 1);
		}

		if (event.target.name == "option5" && option5 > 0) {
			event.target.value--;
			setOption5(event.target.value);
			setTotal5(total5 - price5);
			setTotal(total - price5);
			setQuantity(quantity - 1);
		}
		if (event.target.name == "option6" && option6 > 0) {
			event.target.value--;
			setOption6(event.target.value);
			setTotal6(total5 - price6);
			setTotal(total - price6);
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
			{/* Mini Plain */}
			{/* <br></br>
			<span>{formatter.format(price4)}</span>
			<p>{name4}</p>{" "}
			<button
				value={option4}
				name="option4"
				onClick={add}
				className="plusbutton"
			>
				{" "}
				+{" "}
			</button>{" "}
			<button
				name="option4"
				onClick={minus}
				value={option4}
				className="minusbutton"
			>
				{" "}
				-{" "}
			</button> */}
			{/* Mini Dhal */}
			{/* <br></br>
			<span>{formatter.format(price5)}</span>
			<p>{name5}</p>{" "}
			<button
				value={option5}
				name="option5"
				onClick={add}
				className="plusbutton"
			>
				{" "}
				+{" "}
			</button>{" "}
			<button
				name="option5"
				onClick={minus}
				value={option5}
				className="minusbutton"
			>
				{" "}
				-{" "}
			</button> */}
			{/* Mini Buss Up shot */}
			{/* <br></br>
			<span>{formatter.format(price6)}</span>
			<p>{name6}</p>{" "}
			<button
				value={option6}
				name="option6"
				onClick={add}
				className="plusbutton"
			>
				{" "}
				+{" "}
			</button>{" "}
			<button
				name="option6"
				onClick={minus}
				value={option6}
				className="minusbutton"
			>
				{" "}
				-{" "}
			</button> */}
		</div>
	);
}
