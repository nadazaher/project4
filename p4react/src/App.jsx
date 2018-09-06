import React, { Component } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoggedInLandingPage from './components/LoggedInLandingPage';
// import LogIn from './components/LogIn';

import { userLogin, getEventServices } from './services/api.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      EventServices: [],
      email: '',
      password: '',
      isLoggedIn: null,
    };
    this.isLoggedIn = this.isLoggedIn.bind(this)
    this.logout = this.logout.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
  }

componentDidMount () {
  getEventServices()
  // .then(data => this.setState({ EventServices: data.EventServices }));

  this.isLoggedIn()
}

isLoggedIn() {
  const res = !!(localStorage.getItem("jwt"));
  this.setState({
    isLoggedIn: res,
  })
  return res;
}

handleLogIn(email, password) {
  userLogin({ "email": email, "password": password })
  .then(res => localStorage.setItem("jwt", res.jwt))
  .then(() => this.setState({
    isLoggedIn: true,
  }))
  .then(() => getEventServices())
}


handleChange(e) {
  this.setState({
    [e.target.name]:e.target.value
  })
}

logout() {
  localStorage.removeItem("jwt")
  this.setState({
   isLoggedIn: false,
   EventServices: [],
  })
}


  render() {

    return (
      <div>
        <Header></Header>
        <LoggedInLandingPage></LoggedInLandingPage>
        <LandingPage></LandingPage>

<div className="App">
        TEST LOGIN
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            onChange={this.handleChange}
            value={this.state.value}
            type="password"
          />
          </form>
          <br />

          <button onClick={this.handleLogIn}>
          Login
          </button>

          <button onClick={this.logout}>
          Logout
          </button>
      </div>


        
        {/* <LogIn></LogIn> */}
      
    </div>
  );
}
}
export default App;
