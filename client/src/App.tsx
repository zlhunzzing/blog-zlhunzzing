import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

/* pages */
import Home from './pages/Home';
import NavigationComponent from './component/NavigationComponent';

function App() {
  const isAdmin = useState(true);

  return (
    <div className="App" style={isAdmin ? { paddingTop: '30px' } : {}}>
      <NavigationComponent></NavigationComponent>
      <Switch>
        <Route path="/" render={() => <Home></Home>}></Route>
      </Switch>
    </div>
  );
}

export default App;
