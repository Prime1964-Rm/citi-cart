import React, { Component } from 'react'
import './Homepage.scss'
import MenuContainer from '../../Menucontainer/MenuContainer'

export class Homepage extends Component {

    render() {
        return (
            <div
                className="homepage">
                <MenuContainer />
            </div>
        )
    }
}

export default Homepage
