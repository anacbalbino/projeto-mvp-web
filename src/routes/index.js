import React from "react"
import {BrowserRouter,Switch} from "react-router-dom"

import Route from './Route';

import Login from '../pages/Login'
import Chat from '../pages/Chat'
import Home from '../pages/Home'
import About from '../pages/About'
import Pagina404 from '../pages/Pagina404'

const Routes = () => {
    
  return(
      <BrowserRouter>
        <Switch>
          <Route component={Home} path ="/" exact isPrivate / >
          <Route component={Login} path ="/login"  / >
          <Route component={Home} path ="/main"  isPrivate / >
          <Route component={Chat} path ="/chat"  isPrivate / >
          <Route component={About} path ="/about"  isPrivate / >
          <Route component={Pagina404} path ="*"  isPrivate / >
        </Switch>
    </BrowserRouter>

  )
}

export default Routes;