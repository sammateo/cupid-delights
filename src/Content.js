import Confirm from "../src/confirm";
import ShippingInfo from "../src/ShippingInfo";
import Options from "../src/Options";
import ShippingType from "../src/ShippingType";
import styles from "../styles/Home.module.css";
import Cartfield from "../src/cartfield.js";
import Link from "next/link";
export default function Content({
	checkout,
	name1,
	name2,
	name3,
	// name4,
	// name5,
	// name6,
	option1,
	option2,
	option3,
	// option4,
	// option5,
	// option6,
	price1,
	price2,
	price3,
	// price4,
	// price5,
	// price6,
	total,
	total1,
	total2,
	total3,
	// total4,
	// total5,
	// total6,
	// shipping1,
	// shipping2,
	// shipping3,
	// nextshipping1,
	// nextshipping2,
	// nextshipping3,
	shipping,
	nextDay,
	quantity,
	setCheckout,
	setOption1,
	setOption2,
	setOption3,
	// setOption4,
	// setOption5,
	// setOption6,
	// setPrice1,
	// setPrice2,
	// setPrice3,
	setTotal,
	setTotal1,
	setTotal2,
	setTotal3,
	// setTotal4,
	// setTotal5,
	// setTotal6,
	// setShipping1,
	// setShipping2,
	// setShipping3,
	// setNextShipping1,
	// setNextShipping2,
	// setNextShipping3,
	// setShipping,
	// setNextDay,
	setQuantity,
	changeShipType,
	checkoutFunc,
}) {
	return (
		<div className={styles.content}>
			<div className={styles.logo}>
				<img src="/logo.jpeg" alt="logo" width={90} height={90} />
			</div>
			<h2>Order Here</h2>
			<p className={styles.note}>
				<span style={{ color: "red", display: "block" }}>
					Disclaimer:
				</span>
				Please be aware that our food is prepared in a home setting and
				may contain or come into contact with common allergens, such as
				milk, wheat, peanuts, sesame or soya.
			</p>
			{/* <p style={{ color: "red" }} className={styles.note}>
				Note:{" "}
			</p>
			<p className={styles.note}>
				Shipping will resume to Tuesdays with Monday 5pm as cut off
			</p> */}

			{/* <p className={styles.note}>Buss Up Shot Contains dairy products</p> */}
			<Options
				// checkout={checkout}
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
				// shipping={shipping}
				// nextDay={nextDay}
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
			></Options>
			<ShippingType
				changeShipType={changeShipType}
				nextDay={nextDay}
			></ShippingType>
			<div className={styles.cart}>
				{total == 0 ? <h2>Cart Empty</h2> : <h2>Cart</h2>}
				<Cartfield
					option1={option1}
					price1={price1}
					option2={option2}
					price2={price2}
					option3={option3}
					price3={price3}
					total1={total1}
					total2={total2}
					total3={total3}
					total={total}
					name1={name1}
					name2={name2}
					name3={name3}
					quantity={quantity}
					nextDay={nextDay}
				/>
			</div>

			<Link href="#form">
				<button className={styles.orderButton} onClick={checkoutFunc}>
					Checkout
				</button>
			</Link>
			{checkout && total != 0 && quantity >= 5 && quantity <= 40 ? (
				<Confirm
					option1={option1}
					option2={option2}
					option3={option3}
					price1={price1}
					price2={price2}
					price3={price3}
					total1={total1}
					total2={total2}
					total3={total3}
					total={total}
					name1={name1}
					name2={name2}
					name3={name3}
					quantity={quantity}
					shipping={shipping}
					nextDay={nextDay}
				/>
			) : null}
		</div>
	);
}
