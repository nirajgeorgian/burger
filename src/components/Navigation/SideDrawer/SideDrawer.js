import React from 'react'
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationsItems from '../NavigationItems/NavigationsItems'
import BackDrop from '../../UI/BackDrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'

const SideDrawer = props => {
  let attahedClasses = [classes.SideDrawer, classes.Close]
  if(props.open) {
    attahedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attahedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationsItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer
