import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem href="/" active>Home</NavigationItem>
      <NavigationItem href="/checkout">Checkout</NavigationItem>
  </ul>
)

export default NavigationItems
