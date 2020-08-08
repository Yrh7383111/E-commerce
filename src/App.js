import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from './firebase/firebase.utils';
import './App.css';



// App component
class App extends React.Component
{
    // Constructor
    constructor(props)
    {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    // Function - unsubscribe the current user
    unsubscribeFromAuth = null;


    // Called when the component is first mounted
    componentDidMount()
    {
        // Listen to the state of firebase
        // onAuthStateChanged returns firebase.Unsubscribe (function)
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user);
        });
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
                <Header currentUser={this.state.currentUser} />

                {/* Switch ensure when one Route matches, remaining won't be rendered */}
                <Switch>
                    {/* Only the first component passing to the route has access to Route props:  */}
                    {/* history, location, match */}
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}



export default App;