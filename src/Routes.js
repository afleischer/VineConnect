import React from 'react'
import NavMenu from './components/NavMenu'
import HomePage from './components/HomePage'
import FindWork from './components/FindWork'
import PostWork from './components/PostWork'
import ManageWork from './components/ManageWork'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'

import { NavLink, Switch, Route } from 'react-router-dom';


// To add:
// <Route exact path="/profile" component={Profile}></Route>


const Routes = () => {
    return(
    <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/find_work" component={FindWork}></Route>
        <Route exact path="/post_work" component={PostWork}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
    </Switch>
    )

}

export default Routes