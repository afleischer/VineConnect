import React from 'react'
import HomePage from './components/HomePage'
import FindWork from './components/FindWork'
import PostWork from './components/PostWork'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'

import { NavLink, Switch, Route } from 'react-router-dom';


// To add:
// <Route exact path="/profile" component={Profile}></Route>


const Routes = (props) => {

    return(
    <Switch {...props}>
        <Route exact path="/" render={()=> (<HomePage {...props} Session={props.Session}/>)} />
        <Route exact path="/find_work" render={() => (<FindWork  {...props} Session={props.Session}/>)} />
        <Route exact path="/post_work" render={() => (<PostWork  {...props} Session={props.Session}/>)} />
        <Route exact path="/login" render={()=> (<Login  {...props} />)} Session={props.Session}/>
        <Route exact path="/signup" render={()=> (<Signup  {...props} />)} Session={props.Session}/>
        <Route exact path="/profile" render= {()=> <Profile  {...props} />} Session={props.Session}/>
    </Switch>
    )

}

export default Routes