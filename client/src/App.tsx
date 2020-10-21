import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

/* pages */
import Home from './pages/Home';
import Admin from './pages/Admin'
import PostNew from './pages/PostNew';

/* component */
import NavigationComponent from './component/NavigationComponent';
import AdminInfo from './pages/AdminInfo';

function App() {
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <Switch>
        <Route path="/post-new" render={() => <PostNew></PostNew>}></Route>
        <Route path="/admin/info" render={() => <AdminInfo></AdminInfo>}></Route>
        <Route path="/admin" render={() => <Admin></Admin>}></Route>
        <Route path="/" render={() => <Home></Home>}></Route>
      </Switch>
    </div>
  );
}

export default App;
