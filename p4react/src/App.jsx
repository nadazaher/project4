import React, { Component } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoggedInLandingPage from './components/LoggedInLandingPage';
import LogIn from './components/LogIn';
import Register from './components/Register';
import ESbyCategory from './components/ESbyCategory';
// import EventService from './components/EventService';

import { userLogin, getEventServices, userRegister, saveEventService } from './services/api.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      eventServices: [],
      login_page: "modal",
      email: '',
      password: '',
      isLoggedIn: false,
      register_page: "modal",
      createES_page: "modal"

    };
    
    this.isLoggedIn = this.isLoggedIn.bind(this)
    this.logout = this.logout.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.createEventService = this.createEventService.bind(this)
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
  .then(() => this.setState({
    isLoggedIn: true,
  })
)
  .then(() => getEventServices())
}

handleRegister(email, password) {
  userRegister({ "email": email, "password": password})
  .then(()=> this.handleLogIn( email, password ))
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

createEventService(EventService) {
  saveEventService(EventService)
    .then(data => getEventServices())
    .then(data => {
      this.setState({ eventServices: data.event_services });
    });
}


  render() {

    return (
      <div>
        {/* <EventService></EventService> */}
        <LogIn login={this.state.login_page} toggleModal={this.toggleModal} handleLogIn={this.handleLogIn}/>
        <Header toggleModal={this.toggleModal} isLoggedIn={this.state.isLoggedIn} />
        <LoggedInLandingPage createEV={this.state.createES_page} toggleModal={this.toggleModal} createEventService={this.createEventService}/>
        <LandingPage toggleModal={this.toggleModal}/>
        <Register register={this.state.register_page} toggleModal={this.toggleModal} handleRegister={this.handleRegister}/>
        <ESbyCategory/>
      
    </div>
  );
}
}
export default App;
