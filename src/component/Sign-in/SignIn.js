import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';
import './signin.scss'
import CustomButton from '../Custom-Button/CustomButton';
import {auth, signInWithGoogle} from '../firebase/firebase.utils';
import {ReactComponent as Googleicon} from '../../Assets/seo-and-web.svg';


export class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }
    handlSubmit = async event => {
        
        event.preventDefault();
        const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: '' })
        }catch(error){
            console.error(error);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlechange}>
                    <FormInput type="email" handleChange={this.handleChange} name="email" label='E-mail' value={this.state.email} required />

                    <FormInput type="password" handleChange={this.handleChange} name="password" label="Password" value={this.state.password} required />
                <div className="signins">
                    <CustomButton type="submit" onClick={this.handlSubmit} >SignIN</CustomButton>
                    
                    <CustomButton style={{display:"flex",flexDirection:"row",width:"13vw",alignItems:"center",background:"#c62828"}} onClick={signInWithGoogle}><Googleicon style={{height:"5vh",width:"5vh",marginRight:"1vw"}}/><span >SignIn</span></CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
