import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	const navItems = ["Shipping", "Order", "Cart", "Gallery"];
	return (
		<div className={styles.container}>
			<p className={styles.hero}>Cupid Delights</p>
			{navItems.map((nav) => (
				<p className={styles.navitem} key={nav}>
					{nav}
				</p>
			))}
		</div>
	);
}
