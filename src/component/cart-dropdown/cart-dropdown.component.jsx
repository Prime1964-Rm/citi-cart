import React from 'react'
import {connect} from 'react-redux';
import CartItem from '../carti-tem-component/cartItemComponent';
import CustomButton from '../Custom-Button/CustomButton'
import './cart-dropdown.styles.css'

const CartDropDown = ({cartItems}) => {
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
        </div> 
    <CustomButton>GO TO CHECKOUT</CustomButton>
        
    </div>
)}

const mapStateToProps = (state) => {
    return{
        cartItems: state.cart.cartItems
    }
}
export default connect(mapStateToProps,null)(CartDropDown)