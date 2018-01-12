import React from 'react'
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux'

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
        .map((idKey, key) => {
          return (
            <li key={idKey + key}>
              <span style={{textTransform: 'capitalize'}}>{idKey}</span>
              {props.ingredients[idKey]}
            </li>
          )
        })
  return (
    <Aux>
      <h3>OrderSummary</h3>
      <p>Burger with follwing ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Your total price: <strong>{props.price}</strong></p>
      <p>Continue to checkout ?</p>
      <Button btnType="Danger" clicked={props.purchaseCancled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default OrderSummary
