import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';

import AuthPage from './components/pages/AuthPage'
import Menu from './components/pages/Menu'

function App() {
  let [isAuthenticated,setIsAuthenticated] =  useState(true)
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/auth">
            <AuthPage />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            {isAuthenticated ? <Redirect to='/menu' /> : <Redirect to='/auth' /> }
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
