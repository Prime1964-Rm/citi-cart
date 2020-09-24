import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../Assets/cart.svg'
import './cart-icon.styles.css';
import {connect} from 'react-redux'
import toggleHidden from '../../redux/cart/cart.action'

const CartIcon = ({toggleHidden}) => (
    <div className='cart-icon' onClick={toggleHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleHidden : () => dispatch(toggleHidden())
})


export default connect(null,mapDispatchToProps)(CartIcon);