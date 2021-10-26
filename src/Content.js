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
	changeShipType,
	checkoutFunc,
}) {
	return (
		<div className={styles.content}>
			<div className={styles.logo}>
				<img src="/logo.jpeg" alt="logo" width={90} height={90} />
			</div>
			<h2>Order Here</h2>

			<p style={{ color: "red" }} className={styles.note}>
				Note:{" "}
			</p>
			<p className={styles.note}>Minimum order is 5 roti skins</p>
			<p className={styles.note}>Shipping done on Tuesdays</p>
			<p className={styles.note}>Buss Up Shot Contains diary products</p>
			<Options
				checkout={checkout}
				name1={name1}
				name2={name2}
				name3={name3}
				option1={option1}
				option2={option2}
				option3={option3}
				price1={price1}
				price2={price2}
				price3={price3}
				total={total}
				total1={total1}
				total2={total2}
				total3={total3}
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
				setOption3={setOption3}
				setPrice1={setPrice1}
				setPrice2={setPrice2}
				setPrice3={setPrice3}
				setTotal={setTotal}
				setTotal1={setTotal1}
				setTotal2={setTotal2}
				setTotal3={setTotal3}
				setShipping1={setShipping1}
				setShipping2={setShipping2}
				setShipping3={setShipping3}
				setNextShipping1={setNextShipping1}
				setNextShipping2={setNextShipping2}
				setNextShipping3={setNextShipping3}
				setShipping={setShipping}
				setNextDay={setNextDay}
				setQuantity={setQuantity}
			></Options>
			<ShippingType changeShipType={changeShipType}></ShippingType>
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
					price1={price1}
					total1={total1}
					total2={total2}
					total3={total3}
					total={total}
					option2={option2}
					price2={price2}
					option3={option3}
					price3={price3}
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
