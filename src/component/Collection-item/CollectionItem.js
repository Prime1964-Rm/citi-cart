import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => (

    <div className="collection-item">
        <div className="back-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        {/* <button className="Add-to-Cart">Click Me</button> */}
        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">${price}</div>
        </div>
    </div>

)


export default CollectionItem;

