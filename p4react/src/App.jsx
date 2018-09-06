import React, { Component } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoggedInLandingPage from './components/LoggedInLandingPage';
import LogIn from './components/LogIn';


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
        <LoggedInLandingPage></LoggedInLandingPage>
        <LandingPage></LandingPage>
        <LogIn></LogIn>
      
    </div>
  );
}
}
export default App;
