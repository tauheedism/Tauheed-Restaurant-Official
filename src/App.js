import React,{Fragment,useState}from 'react';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
const App = () => {
  const [cartShow,setCartShow]=useState(false);
  const showCartHandler=()=>{
    setCartShow(true);

  }
  const hiddenCartHandler=()=>{
    setCartShow(false);
  }
  return (
    <Fragment>
      {cartShow && <Cart onClose={hiddenCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>

  )
}

export default App

