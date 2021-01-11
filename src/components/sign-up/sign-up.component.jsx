import React from 'react';
import { connect } from "react-redux";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, TitleContainer } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.actions";



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
        const { email, password, displayName, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmPassword)
        {
            alert("Passwords don't match")
            return;
        }
        // Else
        signUpStart(email, password, displayName);
    };


    // Rendering
    render() {
        const { email, password, displayName, confirmPassword } = this.state;

        return (
            <SignUpContainer>
                <TitleContainer>I do not have a account</TitleContainer>
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
            </SignUpContainer>
        );
    }
}


// Dispatch Actions to all Reducers
const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({
                  email: email, password: password, displayName: displayName }))
});



export default connect(null, mapDispatchToProps)(SignUp);