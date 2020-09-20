import React from 'react'
import './LoginRegistration.scss'
import SignIn from '../Sign-in/SignIn'
import Signup from '../../sign-up/sign-up'


const LoginRegisteration = () =>(
    <div className="sign-in-and-signup">
       <SignIn />
       <Signup/>
    </div>
)

export default LoginRegisteration

