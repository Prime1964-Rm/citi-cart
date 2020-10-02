import React from 'react'
import '../carti-tem-component/cartitem.scss';

const CartItem = ({item: {imageUrl,price,name,quantity}}) =>{
    return(
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <div className='name'>{name}</div>
            <div className='price'>
                {quantity}*${price}</div>
        </div>
        
    </div>)
}

export default CartItem