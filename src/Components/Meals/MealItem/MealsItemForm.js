import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/input";
import CartContext from "../../../Store/Cart-Context";
const MealsItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (e) => {
    e.preventDefault();
    // ctx.items.push(props.item)
    const quantity = document.getElementById("amount" + props.id).value;
    if (quantity.trim().length === 0 || quantity < 1 || quantity > 5) {
      return;
    }
    cartCtx.addItem({ ...props.item, quantity: Number(quantity) });
    document.getElementById("amount" + props.id).value = 1;
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addToCartHandler}>+Add</button>
    </form>
  );
};

export default MealsItemForm;
