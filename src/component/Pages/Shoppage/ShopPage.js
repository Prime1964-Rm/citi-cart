import React, { Component } from 'react'
import ShopData from '../../../Data/ShopData'
import './Shoppage.scss'
import PreviewCollection from '../../Preview-Collection/PreviewCollection'

export class ShopPage extends Component {

    state={
        collections : ShopData
    }

    render() {
        const {collections} = this.state
        return (
            <div className="shop-page" >
                {
                    collections.map(({id, ...otherprops})=>(
                        <PreviewCollection key={id} {...otherprops}   />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage
