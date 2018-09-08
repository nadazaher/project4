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
      createES_page: "modal",
      currentView: ''

    };
    
    this.isLoggedIn = this.isLoggedIn.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.createEventService = this.createEventService.bind(this)
    this.handleLinks = this.handleLinks.bind(this)
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

handleLinks(viewName) {
  this.setState({
    currentView: viewName
  })
}

pageView() {
  const { currentView } = this.state;

  switch (currentView) {
    case 'logged in landing':
      return <LoggedInLandingPage
      createEV={this.state.createES_page} 
      toggleModal={this.toggleModal} 
      createEventService={this.createEventService}
      handleLinks={this.handleLinks}
      />;

    case 'one-category-display':
      return <ESbyCategory
      />;

    // case 'companies index':
    //   return <CompanyView
    //     handleCompanyLink={this.handleCompanyLink}
    //     companies={this.state.companies}
    //     userInfo={this.state.userInfo}
    //   />;
    // case 'company page':
    //   return <CompanyInfoPage
    //     handleProductLink={this.handleProductLink}
    //     deleteFavorite={this.deleteFavorite}
    //     deleteProduct={this.deleteProduct}
    //     updateProduct={this.updateProduct}
    //     addFavorite={this.addFavorite}
    //     handleLinks={this.handleLinks}
    //     currentCompany={this.state.currentCompany}
    //     favorites={this.state.favorites}
    //     userInfo={this.state.userInfo}
    //     products={this.state.products}
    //   />;
    // case 'products index':
    //   return <ProductView
    //     handleProductLink={this.handleProductLink}
    //     deleteFavorite={this.deleteFavorite}
    //     deleteProduct={this.deleteProduct}
    //     updateProduct={this.updateProduct}
    //     createProduct={this.createProduct}
    //     addFavorite={this.addFavorite}
    //     handleLinks={this.handleLinks}
    //     companies={this.state.companies}
    //     favorites={this.state.favorites}
    //     userInfo={this.state.userInfo}
    //     products={this.state.products}
    //   />;
    // case 'favorites page':
    //   return <FavoritesView
    //     handleProductLink={this.handleProductLink}
    //     deleteFavorite={this.deleteFavorite}
    //     deleteProduct={this.deleteProduct}
    //     updateProduct={this.updateProduct}
    //     addFavorite={this.addFavorite}
    //     countFavorites={this.state.countFavorites}
    //     favoritesStats={this.state.favoritesStats}
    //     companies={this.state.companies}
    //     favorites={this.state.favorites}
    //     userInfo={this.state.userInfo}
      // />
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
        <LogIn login={this.state.login_page} toggleModal={this.toggleModal} handleLogIn={this.handleLogIn} handleLinks={this.handleLinks}/>
        <Header toggleModal={this.toggleModal} isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} handleLinks={this.handleLinks}/>
        {/* <LoggedInLandingPage createEV={this.state.createES_page} toggleModal={this.toggleModal} createEventService={this.createEventService}/> */}
        {/* <LandingPage toggleModal={this.toggleModal}/> */}
        <Register register={this.state.register_page} toggleModal={this.toggleModal} handleRegister={this.handleRegister} handleLinks={this.handleLinks}/>
        {this.pageView()}
    </div>
  );
}
}
export default App;

