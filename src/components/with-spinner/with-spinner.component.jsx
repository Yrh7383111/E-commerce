import React from 'react';
import { SpinnerContainer, SpinnerOverlayContainer } from './with-spinner.styles';



// Higher Order Component
// Spinner component
// WrappedComponent - component
const WithSpinner = WrappedComponent => {
    const spinner = ({ isLoading, ...otherProps }) => {
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
                <WrappedComponent {...otherProps} />
            )
        }
    };

    return spinner;
};



export default WithSpinner;