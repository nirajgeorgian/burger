import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux/Aux'

class OrderSummary extends Component {
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map((idKey, key) => {
      return (
        <li key={idKey + key}>
          <span style={{textTransform: 'capitalize'}}>{idKey}</span>
          {this.props.ingredients[idKey]}
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
        <p>Your total price: <strong>{this.props.price}</strong></p>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    )
  }
}

export default OrderSummary
