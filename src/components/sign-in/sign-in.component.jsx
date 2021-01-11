import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { ButtonsContainer, SignInContainer, TitleContainer } from "./sign-in.styles";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";



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
    handleSubmit = async event => {
        // Prevent default submit function of the browser
        event.preventDefault();

        // Object destructing
        const { email, password } = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
    };


    // Rendering
    render()
    {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;

        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
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
}


// Dispatch Actions to all Reducers
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email: email, password: password }))
});


export default connect(null, mapDispatchToProps)(SignIn);