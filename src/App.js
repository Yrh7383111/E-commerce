import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkCurrentUser } from "./redux/user/user.actions";
import './App.css';



// App component
class App extends React.Component
{
    // Function - unsubscribe the current user
    unsubscribeFromAuth = null;


    // Called when the component is first mounted
    componentDidMount()
    {
        // Check current user session
        const { checkCurrentUser } = this.props;
        checkCurrentUser();
    }


    // Called when the component is unmounted
    componentWillUnmount()
    {
        this.unsubscribeFromAuth();
    }


    // Rendering
    render()
    {
        return (
            <div>
                {/* Header */}
                <Header />

                {/* Switch ensure when one Route matches, remaining won't be rendered */}
                <Switch>
                    {/* Only the first component passing to the route has access to Route props:  */}
                    {/* history, location, match */}
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/signin' render={() =>
                        this.props.currentUser
                            ?
                        <Redirect to='/' />
                            :
                        <SignInAndSignUpPage />
                    } />
                </Switch>
            </div>
        );
    }
}


// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization

    // Same as currentUser: selectCurrentUser(state)
    // If state.user doesn't change, memoize currentUser
    currentUser: selectCurrentUser
});

// Dispatch Actions to all Reducers
const mapDispatchToProps = dispatch => ({
    checkCurrentUser: () => dispatch(checkCurrentUser())
});



export default connect(mapStateToProps, mapDispatchToProps)(App);