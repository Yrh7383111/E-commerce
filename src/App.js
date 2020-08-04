import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';



// App component
function App() {
  return (
    <div className='App'>
        {/* Switch ensure when one Route matches, remaining won't be rendered */}
        <Switch>
            {/* Only the first component passing to the route has access to Route props:  */}
            {/* history, location, match */}
            <Route exact path='/' component={HomePage} />
        </Switch>
    </div>
  );
}



export default App;