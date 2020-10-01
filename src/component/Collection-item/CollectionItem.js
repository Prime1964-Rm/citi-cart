import React from 'react';
import CustomButton from '../Custom-Button/CustomButton';
import './CollectionItem.scss';
 import  {connect} from 'react-redux'
 import {addItem} from '../../redux/cart/cart.action'

const CollectionItem = ({item, addItem }) => {
    const {id,name,price,imageUrl} = item
    return(
    <div className="collection-item">
        <div className="back-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">${price}</div>
        </div>
        <CustomButton onClick={()=>addItem(item)} inverted={true}>ADD TO CART</CustomButton>

    </div>

)}

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);

