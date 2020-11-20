import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Header from './Header';
import Sidebar from './Sidebar'
import Home from './Home';
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <div className="app">
      <Router >
      <Header />
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <div className="app__home">
                    <Sidebar />
                    <Home />  
                  </div>
                </Route>
              </Switch>
            </Router>
             {/* <Header />
             <div className="home">
                    <Sidebar />
                    <Home />  
                  </div> */}
   </div>
  );
}
