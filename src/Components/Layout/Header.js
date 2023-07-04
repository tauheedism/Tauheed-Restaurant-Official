import React, { Fragment } from 'react'
import mealsImage from '../../Assets/meals.jpg'
import classes from './Header.module.css';
import Button from './HeaderCartButton';
const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <Button/>
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food" />
        </div>
    </Fragment>
  )
}

export default Header
