import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
const App = (props) => {
  const [cartShow, setCartShow] = useState(false);
  const showCartHandler = () => {
    setCartShow(true);
  };
  const hiddenCartHandler = () => {
    setCartShow(false);
  };
  return (
    <CartProvider>
      {cartShow && <Cart onClose={hiddenCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
