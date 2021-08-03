import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button.compononent";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import "./cart-component.styles.scss";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      GO TO CHECK OUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
