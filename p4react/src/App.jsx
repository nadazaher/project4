import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';


import getEventServices from './services/api.js';

class App extends Component {

componentDidMount () {
  getEventServices()
  // isLoggedIn()
}

// login() {
//   const url = `${BASE_URL}/user_token`;
//   const body = {"auth": {"email": this.state.email, "password": this.state.password} }
//   const init = { method: 'POST',
//                  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
//                  mode: 'cors',
//                  body:JSON.stringify(body),
//                  }
//   fetch(url, init)
//   .then(res => res.json())
//   .then(res => localStorage.setItem("jwt", res.jwt))
//   .then(() => this.setState({
//     // isLoggedIn: true,
//   }))
//   .then(() => this.getEventServices())
//   .catch(err => console.log(err))
// }


  render() {

    return (
      <div>
        <Header></Header>
        <LandingPage></LandingPage>
      <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
      <br />
      <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
              name="password"
              id="password"
              type="password"
            />
      </form> 
      <br />
      <div>
              <button
                onClick={this.login}
              >
                  Login
              </button>
             
        </div>
    </div>
  );
}
}
export default App;
