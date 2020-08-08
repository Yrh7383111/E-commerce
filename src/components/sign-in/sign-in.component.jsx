import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.styles.scss';



class SignIn extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }


    // Helper functions

    // Handle when user types something in the field
    handleChange = event => {
        // Object destructing
        const { value, name } = event.target;

        // Dynamically assign value to name
        this.setState({ [name]: value });
    };

    // Handle when user submit the form
    handleSubmit = event => {
        // Prevent default submit function of the browser
        event.preventDefault();

        // Clean up the data in each field
        this.setState({ email: '', password: '' });
    };


    // Rendering
    render()
    {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email'
                               value={this.state.email}
                               handleChange={this.handleChange}
                               label='Email'
                               required />
                    <FormInput name='password' type='password'
                               value={this.state.password}
                               handleChange={this.handleChange}
                               label='Password'
                               required />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}



export default SignIn;