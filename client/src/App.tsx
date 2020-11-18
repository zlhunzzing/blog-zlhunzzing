import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';
import * as guestAPI from './api/Guest'

/* pages */
import Home from './pages/Home';
import Admin from './pages/Admin'
import AdminInfo from './pages/AdminInfo';
import AdminCategory from './pages/AdminCategory';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';

/* component */
import NavigationComponent from './component/NavigationComponent';

function App() {
  useEffect(() => {
    guestAPI.getInfo()
    guestAPI.getCategory()
    guestAPI.getPosts()
  })
  
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <Switch>
        <Route path="/editpost" render={() => <EditPost></EditPost>}></Route>
        <Route path="/addpost" render={() => <AddPost></AddPost>}></Route>
        <Route path="/admin/category" render={() => <AdminCategory></AdminCategory>}></Route>
        <Route path="/admin/info" render={() => <AdminInfo></AdminInfo>}></Route>
        <Route path="/admin" render={() => <Admin></Admin>}></Route>
        <Route path="/" render={() => <Home></Home>}></Route>
      </Switch>
    </div>
  );
}

export default App;
