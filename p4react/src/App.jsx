import React, { Component } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoggedInLandingPage from './components/LoggedInLandingPage';
import LogIn from './components/LogIn';
import Register from './components/Register';

import { userLogin, getEventServices, userRegister } from './services/api.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      eventServices: [],
      login_page: "modal",
      email: '',
      password: '',
      isLoggedIn: null,
      register_page: "modal",
      createES_page: "modal"

    };
    
    this.isLoggedIn = this.isLoggedIn.bind(this)
    this.logout = this.logout.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleRegiste = this.handleRegister.bind(this)
  }
// Do i move isLoggedIn to log in form

componentDidMount () {
  getEventServices()
  .then(data => this.setState({ eventServices: data.event_services }));

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
  userLogin({ "email": email, "password": password})
  .then(res => localStorage.setItem("jwt", res.jwt))
  .then(() => this.setState({
    isLoggedIn: true,
  }))
  .then(() => getEventServices())
}

handleRegister(email, password) {
  userRegister({ "email": email, "password": password})
  .then(res => window.localStorage.setItem("jwt", res.jwt))
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

toggleModal(modal) {
  this.state[modal] === 'modal'
    ?
    this.setState({
      [modal]: 'modal is-active'
    })
    :
    this.setState({
      [modal]: 'modal'
    })
}


  render() {

    return (
      <div>
        <LogIn login={this.state.login_page} toggleModal={this.toggleModal} handleLogIn={this.handleLogIn}/>
        <Header toggleModal={this.toggleModal}/>
        <LoggedInLandingPage createEV={this.state.createES_page} toggleModal={this.toggleModal}/>
        <LandingPage></LandingPage>
        <Register register={this.state.register_page} toggleModal={this.toggleModal} handleRegister={this.handleRegister}/>
      
    </div>
  );
}
}
export default App;
