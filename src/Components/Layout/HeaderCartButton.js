import React, { Fragment, useContext } from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/Cart-Context';
const HeaderCartButton = (props) => {
  const cartContext=useContext(CartContext);
  let quantity=0;
  cartContext.items.forEach(item => {
    quantity= quantity + Number(item.quantity)
   })
  return (
    <Fragment>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            {/* <span>{context.message} </span> */}
            <span className={classes.badge}>
                {quantity}
            </span>
        </button>
    </Fragment>
  )
}

export default HeaderCartButton
