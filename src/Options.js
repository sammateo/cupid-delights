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
  quantity,
  setCheckout,
  setOption1,
  setOption2,
  setOption3,
  setOption4,
  setOption5,
  setOption6,
  setTotal,
  setTotal1,
  setTotal2,
  setTotal3,
  setTotal4,
  setTotal5,
  setTotal6,
  setQuantity,
}) {
  var formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "GBP",
  });
  const quantityMultiplier = 6;
  let updatedVal;
  function add(event) {
    setCheckout(false);
    if (event.target.name == "option1") {
      updatedVal = Number(event.target.value) + quantityMultiplier;
      event.target.value = updatedVal;
      setOption1(event.target.value);
      setTotal1(total1 + price1 * quantityMultiplier);
      setTotal(total + price1 * quantityMultiplier);
      setQuantity(quantity + 1 * quantityMultiplier);
    }

    if (event.target.name == "option2") {
      updatedVal = Number(event.target.value) + quantityMultiplier;
      event.target.value = updatedVal;
      setOption2(event.target.value);
      setTotal2(total2 + price2 * quantityMultiplier);
      setTotal(total + price2 * quantityMultiplier);
      setQuantity(quantity + 1 * quantityMultiplier);
    }
    if (event.target.name == "option3") {
      updatedVal = Number(event.target.value) + quantityMultiplier;
      event.target.value = updatedVal;
      setOption3(event.target.value);
      setTotal3(total3 + price3 * quantityMultiplier);
      setTotal(total + price3 * quantityMultiplier);
      setQuantity(quantity + 1 * quantityMultiplier);
    }
    if (event.target.name == "option4") {
      updatedVal = Number(event.target.value) + quantityMultiplier;
      event.target.value = updatedVal;
      setOption4(event.target.value);
      setTotal4(total4 + price4 * quantityMultiplier);
      setTotal(total + price4 * quantityMultiplier);
      setQuantity(quantity + 1 * quantityMultiplier);
    }
    if (event.target.name == "option5") {
      updatedVal = Number(event.target.value) + quantityMultiplier;
      event.target.value = updatedVal;
      setOption5(event.target.value);
      setTotal5(total5 + price5 * quantityMultiplier);
      setTotal(total + price5 * quantityMultiplier);
      setQuantity(quantity + 1 * quantityMultiplier);
    }
    if (event.target.name == "option6") {
      updatedVal = Number(event.target.value) + quantityMultiplier;
      event.target.value = updatedVal;
      setOption6(event.target.value);
      setTotal6(total6 + price6 * quantityMultiplier);
      setTotal(total + price6 * quantityMultiplier);
      setQuantity(quantity + 1 * quantityMultiplier);
    }
  }

  function minus(event) {
    setCheckout(false);
    if (event.target.name == "option1" && option1 > 0) {
      event.target.value = Number(event.target.value) - quantityMultiplier;
      setOption1(event.target.value);
      setTotal1(total1 - price1 * quantityMultiplier);
      setTotal(total - price1 * quantityMultiplier);
      setQuantity(quantity - 1 * quantityMultiplier);
    }

    if (event.target.name == "option2" && option2 > 0) {
      event.target.value = Number(event.target.value) - quantityMultiplier;
      setOption2(event.target.value);
      setTotal2(total2 - price2 * quantityMultiplier);
      setTotal(total - price2 * quantityMultiplier);
      setQuantity(quantity - 1 * quantityMultiplier);
    }
    if (event.target.name == "option3" && option3 > 0) {
      event.target.value = Number(event.target.value) - quantityMultiplier;
      setOption3(event.target.value);
      setTotal3(total3 - price3 * quantityMultiplier);
      setTotal(total - price3 * quantityMultiplier);
      setQuantity(quantity - 1 * quantityMultiplier);
    }
    if (event.target.name == "option4" && option4 > 0) {
      event.target.value = Number(event.target.value) - quantityMultiplier;
      setOption4(event.target.value);
      setTotal4(total4 - price4 * quantityMultiplier);
      setTotal(total - price4 * quantityMultiplier);
      setQuantity(quantity - 1 * quantityMultiplier);
    }

    if (event.target.name == "option5" && option5 > 0) {
      event.target.value = Number(event.target.value) - quantityMultiplier;
      setOption5(event.target.value);
      setTotal5(total5 - price5 * quantityMultiplier);
      setTotal(total - price5 * quantityMultiplier);
      setQuantity(quantity - 1 * quantityMultiplier);
    }
    if (event.target.name == "option6" && option6 > 0) {
      event.target.value = Number(event.target.value) - quantityMultiplier;
      setOption6(event.target.value);
      setTotal6(total5 - price6 * quantityMultiplier);
      setTotal(total - price6 * quantityMultiplier);
      setQuantity(quantity - 1 * quantityMultiplier);
    }
  }

  return (
    <div className={styles.options}>
      <span>{formatter.format(price1 * quantityMultiplier)}</span>
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
      <span>{formatter.format(price2 * quantityMultiplier)}</span>
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
      <span>{formatter.format(price3 * quantityMultiplier)}</span>
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
