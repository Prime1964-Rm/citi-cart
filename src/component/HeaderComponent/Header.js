import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../Assets/citilogo.svg'
import './Header.scss'
import {auth} from '../firebase/firebase.utils'


const Header = ({currentUser})=>(
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
       </div>
    </div>

)

export default Header