import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './components/with-spinner/spinner.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkCurrentUser } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';
const Header = lazy(() => import('./components/header/header.component'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));


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
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
    );
}


export default App;