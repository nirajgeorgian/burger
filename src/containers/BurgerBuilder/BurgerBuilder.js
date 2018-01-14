import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 1.0
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
                  .map(igKey => {
                    return ingredients[igKey]
                  })
                  .reduce((sum, el) => {
                    return sum + el
                  }, 0)
    this.setState({
      purchasable: sum > 0
    })
  }
  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }
  purchaseCancelHandler = props => {
    this.setState({
      purchasing: false
    })
  }
  purchaseContinueHandler = props => {

  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const newCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newCount
    const priceAddition = INGREDIENT_PRICES[type]
    const newPrice = this.state.totalPrice + priceAddition
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchaseState(updatedIngredients)
  }
  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    const newCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const newPrice = this.state.totalPrice - priceDeduction
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchaseState(updatedIngredients)
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    // console.log(disabledInfo)
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancled = {this.purchaseCancelHandler}
            purchaseContinued = {this.purchaseContinueHandler}
            price = {this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          ingredientAdded = {this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderd={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder
