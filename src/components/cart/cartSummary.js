import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  Badge,
  NavLink,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

class CartSummary extends Component {
  cartItem(cartItem) {
    this.props.actions.removeFromCart(cartItem.product);
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>
        <Link to="/cart" >Sepetiniz Boş</Link>
        </NavLink>
      </NavItem>
    );
  }
  renderCartSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet  <Badge color="warning" >{this.props.cart.length} </Badge>
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge color="danger" onClick={() => this.cartItem(cartItem)}>X</Badge>
              {cartItem.product.productName}
              <Badge color="warning" > {cartItem.quantity} </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem> <Link to="/cart" >Sepete Git</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderCartSummary()
          : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
