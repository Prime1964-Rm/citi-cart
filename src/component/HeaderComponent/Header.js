import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../Assets/citilogo.svg'
import './Header.scss'
import {auth} from '../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartIcon from '../Cart-icon/cart-icon-component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden})=>(
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        
       <div className="options">
            <Link to="/Shoppage" className="option">Shop</Link>
            <Link to="/Contact" className="option">Contact</Link>   
            {
                currentUser?
                <div  className='option' onClick={()=> auth.signOut()}>Sign Out</div>
                :
                <Link className='option' to="/signinsignup">Sign In</Link>
            }
            <CartIcon /> 
       </div>
       {
           hidden? null: <CartDropDown/> 
       }
       
    </div>

)
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
    currentUser: currentUser,
    hidden: hidden
})

export default connect(mapStateToProps)(Header);
