import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../Assets/cart.svg'
import './cart-icon.styles.css';
import {connect} from 'react-redux'
import {toggleHidden} from '../../redux/cart/cart.action'

const CartIcon = ({toggleHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleHidden : () => dispatch(toggleHidden())
})

const mapStateToProps = ({cart: {cartItems}}) =>({
    itemCount: cartItems.reduce(
        (totalItemsCount, cartItem) => totalItemsCount + cartItem.quantity,0
    )
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
