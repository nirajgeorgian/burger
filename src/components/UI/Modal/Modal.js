import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../BackDrop/Backdrop'
import classes from './Modal.css'

class Modal extends Component {
  shouldComponentUpdate(nextProp, nextState) {
    return nextProp.show !== this.props.show || nextProp.children !== this.props.children
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClose}/>
        <div className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          >
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Modal
