import styled, { css } from 'styled-components';


// Button Styles
const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

// Google Sign-in Styles
const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

// Inverted Styles
const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;


// Retrieve Button styles
const getButtonStyles = otherProps => {
    let result = null;

    if (otherProps.isGoogleSignIn)
    {
        result = googleSignInButtonStyles;
        return result;
    }

    if (otherProps.inverted)
    {
        result = invertedButtonStyles;
    }
    else {
        result = buttonStyles
    }
    return result;
};


// Custom Button Container
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;