import React, { useContext } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/input';
import CartContext from '../../../Store/Cart-Context';
const MealsItemForm = (props) => {
  const ctx=useContext(CartContext)
  const addToCartHandler=(e)=>{
    e.preventDefault();
    // ctx.items.push(props.item)
    const quantity=document.getElementById('amount' +props.id).value;
    console.log(quantity);
    ctx.addItem({...props.item,quantity:quantity})
    console.log(ctx.items);
  }
  return (
   <form className={classes.form}>
    <Input label="Amount" input={{
        id:'amount' +props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }} />
    <button onClick={addToCartHandler}>+Add</button>
   </form>
  )
}

export default MealsItemForm
