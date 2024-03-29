import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, TitleContainer } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.actions";


const  SignUp = () => {
    // Component states
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Dispatch Actions to all Reducers
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    const dispatch = useDispatch();


    // Helper functions

    // Handle when user types something in the field
    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    // Handle when user submit the form
    const { email, password, displayName, confirmPassword } = userCredentials;
    const handleSubmit = async event => {
        // Prevent default submit function of the browser
        event.preventDefault();

        if (password !== confirmPassword)
        {
            alert("Passwords don't match")
            return;
        }
        // Else
        dispatch(signUpStart({
            email: email,
            password: password,
            displayName: displayName
        }));
    };


    // Rendering
    return (
        <SignUpContainer>
            <TitleContainer>I do not have a account</TitleContainer>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='displayName' type='text'
                           value={displayName}
                           handleChange={handleChange}
                           label='Display Name'
                           required />
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
                <FormInput name='confirmPassword' type='password'
                           value={confirmPassword}
                           handleChange={handleChange}
                           label='Confirm Password'
                           required />

                <CustomButton type='submit'>
                    Sign up
                </CustomButton>
            </form>
        </SignUpContainer>
    );
}


export default SignUp;
