import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (product) => {
    // const temp = [...items]

    // const productExist = temp.find((item) => item.id === product.id);
    // console.log(productExist)
    // if (productExist) {
    //   updateItems(
    //     items.map((item) =>
    //       {if(item.id === product.id)
    //       }

    //     )
    //   )
    // } else {
    //       updateItems([...items, product])
    //       //cartContext.items.push(product)
    //     }

    let hasItem = false;
    const newItemArray = [...items];
    newItemArray.forEach((ele, ind) => {
      if (product.id === ele.id) {
        hasItem = true;
        newItemArray[ind].quantity =
          Number(newItemArray[ind].quantity) + Number(product.quantity);
      }
    });
    hasItem === false
      ? updateItems([...items, product])
      : updateItems(newItemArray);
  };

  const removeItemFromCartHandler = (id) => {
    // const productExist = items.find((item) => item.id === id);
    // let hasItem = false
    console.log(id);
    let hasItem = false;
    const newItemArray = [...items];
    newItemArray.forEach((ele, ind) => {
      if (id === ele.id && ele.quantity === 1) {
        hasItem = true;
        const temp = newItemArray.splice(ind, 1);
        updateItems(temp);
        console.log(newItemArray);
      } else if (id === ele.id) {
        hasItem = true;
        newItemArray[ind].quantity = Number(newItemArray[ind].quantity) - 1;
        console.log("hi");
      }
    });
    hasItem === false ? updateItems([...items]) : updateItems(newItemArray);
  };

  const cartContext = {
    items: items,
    totalAmount: items.reduce((ack, curr) => {
      return (ack += curr.price * curr.quantity);
    }, 0),
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
