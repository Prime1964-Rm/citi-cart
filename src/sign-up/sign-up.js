import React from 'react';

import FormInput from '../component/form-input/FormInput'
import CustomButton from '../component/Custom-Button/CustomButton'

import { auth, createUserProfileDocument } from '../component/firebase/firebase.utils';

import './signup-styles.scss';

class Signup extends React.Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {password,confirmPassword,email,displayName} = this.state
        if (password !== confirmPassword) {
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    handleChange=(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div>
                <h2></h2>
                <span></span>
                <form>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Full Name'
                        onChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        onChange={this.handleChange}
                        required
                    />


                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Re-enter Password'
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton onClick={this.handleSubmit} type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup;