import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkCurrentUser } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";


// App component
const App =  () => {
    // Retrieve props from store
    // Caching - Memoization
    // If state.user doesn't change, memoize currentUser
    const currentUser = useSelector(selectCurrentUser);
    // Dispatch Actions to all Reducers
    const dispatch = useDispatch();


    // Called when
    // 1. The component is first mounted
    // 2. checkCurrentUser changes
    useEffect(() => {
        dispatch(checkCurrentUser());
    }, [dispatch]);


    // Rendering
    return (
        <div>
            <GlobalStyle />

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
                    currentUser
                        ?
                        <Redirect to='/' />
                        :
                        <SignInAndSignUpPage />
                } />
            </Switch>
        </div>
    );
}


export default App;