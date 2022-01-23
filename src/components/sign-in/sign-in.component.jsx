import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { ButtonsContainer, SignInContainer, TitleContainer } from "./sign-in.styles";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";



const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    // Component states
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });


    // Helper functions

    // Handle when user types something in the field
    const handleChange = event => {
        // Object destructing
        const { value, name } = event.target;

        // Dynamically assign value to name
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    // Handle when user submit the form
    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        // Prevent default submit function of the browser
        event.preventDefault();

        // Object destructing
        emailSignInStart(email, password);
    };


    // Rendering
    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email'
                           value={email}
                           handleChange={handleChange}
                           label='Email'
                           required />
                <FormInput name='password' type='password'
                           value={password}
                           handleChange={handleChange}
                           label='Password'
                           required />
                <ButtonsContainer>
                    <CustomButton type='submit'>
                        Sign in
                    </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}


// Dispatch Actions to all Reducers
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email: email, password: password }))
});


export default connect(null, mapDispatchToProps)(SignIn);