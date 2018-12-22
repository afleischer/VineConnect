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
        <Route exact path="/" render={()=> (<HomePage {...props}/>)} />
        <Route exact path="/find_work" render={() => (<FindWork  {...props}/>)} />
        <Route exact path="/post_work" render={() => (<PostWork  {...props}/>)} />
        <Route exact path="/login" render={()=> (<Login  {...props} />)}/>
        <Route exact path="/signup" render={()=> (<Signup  {...props} />)}/>
        <Route exact path="/profile" render= {()=> <Profile  {...props} />}/>
    </Switch>
    )

}

export default Routes