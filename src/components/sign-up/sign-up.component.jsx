import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';



class SignUp extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }


    // Helper functions

    // Handle when user types something in the field
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    // Handle when user submit the form
    handleSubmit = async event => {
        // Prevent default submit function of the browser
        event.preventDefault();

        // Object destructing
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword)
        {
            console.log("Passwords don't match")
            return;
        }
        // Else
        try
        {
            // Firebase Authentication
            // Object destructing
            // Create an account with email and password by using Firebase built-in function
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // Firebase Authentication
            // Persist data in the database
            await createUserProfileDocument(user, { displayName });

            // Clean up forms
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };


    // Rendering
    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text'
                               value={displayName}
                               handleChange={this.handleChange}
                               label='Display Name'
                               required />
                    <FormInput name='email' type='email'
                               value={email}
                               handleChange={this.handleChange}
                               label='Email'
                               required />
                    <FormInput name='password' type='password'
                               value={password}
                               handleChange={this.handleChange}
                               label='Password'
                               required />
                    <FormInput name='confirmPassword' type='password'
                               value={confirmPassword}
                               handleChange={this.handleChange}
                               label='Confirm Password'
                               required />

                    <CustomButton type='submit'>
                        Sign up
                    </CustomButton>
                </form>
            </div>
        );
    }
}



export default SignUp;