import React,{Fragment}from 'react';
import Header from './Components/Layout/Header'
import MealsSummary from './Components/Meals/MealsSummary'
import AvailableMeals from './Components/Meals/AvailableMeals';
const App = () => {
  return (
    <Fragment>
      <Header/>
      <MealsSummary/>
      <AvailableMeals/>
    </Fragment>
  )
}

export default App

