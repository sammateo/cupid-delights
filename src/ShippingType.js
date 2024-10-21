import styles from "../styles/Shipping.module.css";
export default function ShippingType({ changeShipType, nextDay }) {
	return (
		<div className={styles.nextDay}>
			<label htmlFor="nextDay">Shipping Type</label>
			<p>
				<input
					type="radio"
					id="standard"
					name="nextDay"
					onChange={changeShipType}
					checked={!nextDay}
				></input>
				<span>Express</span>
			</p>
			<p>
				<input
					type="radio"
					id="nextDay"
					name="nextDay"
					onChange={changeShipType}
					checked={nextDay}
				></input>
				<span>Guaranteed Next Day</span>
			</p>
		</div>
	);
}
