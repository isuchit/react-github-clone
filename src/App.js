import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import Home from './Home';
import Login from './Login'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import { useStateValue } from './StateProvider';
import axios from 'axios';

export default function App() {

  const [{ user, userDetails }, dispatch] = useStateValue();

  useEffect(() => {
    const getUserDetails = async () => {
      let baseURL = `https://api.github.com/users/${user}`
      let response = await axios.get(`${baseURL}`)
      dispatch({
        type: 'SET_USER_DETAILS',
        userDetails: response.data
      })
  }
  if(user != null){
    getUserDetails()
  }
  }, [user])

  useEffect(() => {
    const getUserRepos = async () => {
      let response = await axios.get(`${userDetails.repos_url}`)
      dispatch({
        type: 'SET_USER_REPO',
        userRepos: response.data
      })
  }
  if(userDetails != 0){
    getUserRepos()
  }
  }, [userDetails])

  return (
    <div className="app">
      <Router >     
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
          <Header />
            <div className="app__home">
              <Sidebar />
              <Home />
            </div>
            <Footer />
          </Route>
        </Switch>
        <Redirect to="/login" />
      </Router>
    </div>
  );
}
