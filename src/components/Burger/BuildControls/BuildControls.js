import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
]

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(control => {
        return <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdded(control.type)}
          remove = {() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      })}
      <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.orderd}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls
