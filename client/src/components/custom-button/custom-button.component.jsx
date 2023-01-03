import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";


// Custom Button component
const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonContainer {...otherProps}>
        {/* children - the text between the component */}
        {/* Example: <CustomButton type='submit'> Sign in </CustomButton> */}
        {/* In this case, children is "Sign in" */}
        {children}
    </CustomButtonContainer>
);


export default CustomButton;
