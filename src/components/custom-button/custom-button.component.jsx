import React from "react";
import './custom-button.styles.scss';



const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {/* children - the text between the component */}
        {/* Example: <CustomButton type='submit'> Sign in </CustomButton> */}
        {/* In this case, children is "Sign in" */}
        {children}
    </button>
);



export default CustomButton;