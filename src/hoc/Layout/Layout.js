import React, { Component } from 'react'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Aux from '../Aux/Aux'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.css'

class Layout extends Component {
  state = {
    showSideDrwaer: false
  }
  handleSideDrawer = event => {
    this.setState({
      showSideDrwaer: false
    })
  }
  drawerToggleClicked = event => {
    this.setState((prevState) => {
      return {showSideDrwaer: !prevState.showSideDrwaer}
    })
  }
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.drawerToggleClicked}/>
        <SideDrawer open={this.state.showSideDrwaer} closed = {this.handleSideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout
