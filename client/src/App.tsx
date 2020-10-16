import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

/* pages */
import Home from './pages/Home';
import PostNew from './pages/PostNew';

/* component */
import NavigationComponent from './component/NavigationComponent';

function App() {
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <Switch>
        <Route path="/post-new" render={() => <PostNew></PostNew>}></Route>
        <Route path="/" render={() => <Home></Home>}></Route>
      </Switch>
    </div>
  );
}

export default App;
