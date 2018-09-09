
import decode from 'jwt-decode';
import React, { Component } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoggedInLandingPage from './components/LoggedInLandingPage';
import LogIn from './components/LogIn';
import Register from './components/Register';
import ESbyCategory from './components/ESbyCategory';
import DetailedES from './components/DetailedES';

import { userLogin, getEventServices, userRegister, saveEventService, saveComment, getComments } from './services/api.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      eventServices: [],
      login_page: "modal",
      isLoggedIn: false,
      register_page: "modal",
      createES_page: "modal",
      addComment_page: "modal",
      currentView: '',
      currentCategory: '',
      currentES: '',
      userInfo: null,
      comments: []
    };

    this.isLoggedIn = this.isLoggedIn.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.createEventService = this.createEventService.bind(this)
    this.handleLinks = this.handleLinks.bind(this)
    this.setCategory = this.setCategory.bind(this)
    this.createComment = this.createComment.bind(this)
  }

  componentDidMount() {
    getEventServices()
      .then(data => this.setState({ eventServices: data.event_services }));

    this.isLoggedIn()
  }

  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
    })
    if (res) {
      let token = decode(localStorage.getItem("jwt"))
      this.setState({
        userInfo: token.sub
      })
    }
    return res;
  }

  handleLogIn(email, password) {
    userLogin({ "email": email, "password": password })
      .then(res => localStorage.setItem("jwt", res.jwt))
      .then(() => this.setState({
        isLoggedIn: true,
      }))
      .then(() => {
        let token = decode(localStorage.getItem("jwt"))
        this.setState({
          userInfo: token.sub
        })
      })
      .then(() => getEventServices())
      .catch(err => console.log(err))
  }

  handleRegister(email, password) {
    userRegister({ "email": email, "password": password })
      .then(() => this.handleLogIn(email, password))
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogout() {
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

  createComment(Comment) {
    saveComment(Comment)
    .then(data => getComments())
    .then(data => {
      this.setState({ comments: data.comments });
    });
  }

  handleLinks(viewName) {
    this.setState({
      currentView: viewName
    })
  }

  setCategory(category) {
    this.setState({
      currentCategory: category
    })
  }

  // setEventService(ES) {
  //   const ES = this.state.eventServices.find((ES) =>
  //   ES.id === ESid);
  //   this.setState({
  //     currentES: ES
  //   })
  // }

  pageView() {
    const { currentView } = this.state;

    switch (currentView) {
      case 'logged in landing':
        return <LoggedInLandingPage
          createEV={this.state.createES_page}
          toggleModal={this.toggleModal}
          createEventService={this.createEventService}
          handleLinks={this.handleLinks}
          setCategory={this.setCategory}
        />;



      case 'one-category-display':
        return <ESbyCategory
          eventServices={this.state.eventServices}
          currentCategory={this.state.currentCategory}
          handleLinks={this.handleLinks}

        />;

      case 'detailed-display':
        return <DetailedES
          eventServices={this.state.eventServices}
          currentES={this.state.currentES}
          setEventService={this.setEventService}
          toggleModal={this.toggleModal}
          addComment = {this.state.addComment_page}
          createComment = {this.createComment}
      

        />;

      default:
        return <LandingPage
          handleLinks={this.handleLinks}
          toggleModal={this.toggleModal}
        />

    }
  }






  render() {

    return (
      <div>
        {/* <EventService></EventService> */}
        <LogIn login={this.state.login_page} toggleModal={this.toggleModal} handleLogIn={this.handleLogIn} handleLinks={this.handleLinks} />
        <Header toggleModal={this.toggleModal} isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} handleLinks={this.handleLinks} />
        {/* <LoggedInLandingPage createEV={this.state.createES_page} toggleModal={this.toggleModal} createEventService={this.createEventService}/> */}
        {/* <LandingPage toggleModal={this.toggleModal}/> */}
        <Register register={this.state.register_page} toggleModal={this.toggleModal} handleRegister={this.handleRegister} handleLinks={this.handleLinks} />
        {this.pageView()}
      </div>
    );
  }
}
export default App;

