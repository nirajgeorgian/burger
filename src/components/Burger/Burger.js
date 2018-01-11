import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
  let trandformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, [])
  if(trandformedIngredients.length === 0) {
    trandformedIngredients = <p>Please start adding ingredients.</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      { trandformedIngredients }
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default Burger
