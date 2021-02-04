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
import Header from './components/layout/Header'

function App() {
  let [isAuthenticated,setIsAuthenticated] =  useState(false)
  return (
    <div className="App"> 
      <Header />
      <Router>
        <Switch>
          <Route exact path="/auth">
            <AuthPage />
          </Route>
          <Route exact path="/dashboard">
            <AuthPage />
          </Route>
          <Route exact path="/menu">
            {isAuthenticated ? <Menu /> : <Redirect to='/auth' /> }
          </Route>
          <Route path="/">
            {isAuthenticated ? <Redirect to='/menu' /> : <Redirect to='/auth' /> }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
