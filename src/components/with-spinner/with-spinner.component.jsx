import React from 'react';
import { SpinnerContainer, SpinnerOverlayContainer } from './with-spinner.styles';



// Higher Order Component
// Spinner component
// WrappedComponent - component
const WithSpinner = Component => {
    // Return functional component
    const Spinner = ({ isLoading, ...otherProps }) => {
        if (isLoading)
        {
            return (
                <SpinnerOverlayContainer>
                    <SpinnerContainer/>
                </SpinnerOverlayContainer>
            )
        }
        else {
            return (
                <Component {...otherProps} />
            )
        }
    };

    return Spinner;
};



export default WithSpinner;