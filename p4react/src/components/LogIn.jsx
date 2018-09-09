import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoggedIn: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }
  //  do i need isLoggedIn in state


    handleChange(evt) {
        const { name, value } = evt.target;
        this.setState({
            [name]: value,
        });
    }

    toggle(evt) {
        evt.preventDefault();
        this.props.toggle('loginForm');
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            email: '',
            password:'',
            userId: ''
        })
        this.props.toggle('loginForm');
    }


    render () {
    return (
        <div>
<div className={this.props.login}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Login</p>
              <FontAwesomeIcon icon={["fas", "times"]} onClick={() => this.props.toggleModal('login_page')}/>
              </header>
              <section className="modal-card-body">
              <div>
<div className="field">
  <p className="control has-icons-left has-icons-right">


    <input className="input" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
    <span className="icon is-small is-left">
        <FontAwesomeIcon icon={["fas", "envelope"]}/>
    </span>
    <span className="icon is-small is-right">
        <FontAwesomeIcon icon={["fas", "check"]}/>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input className="input" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
    <span className="icon is-small is-left">
        <FontAwesomeIcon icon={["fas", "lock"]}/>
    </span>
  </p>
</div>
<div className="field">
  <p className="control">
<button type="submit" value="Log In" className="button is-success" onClick={() => {        this.props.handleLogIn(this.state.email, this.state.password)
this.props.toggleModal('login_page')
this.props.handleLinks('logged in landing')
}

    }>
          Login
          </button>
    <button className="button is-text" onClick={() => {
        this.props.toggleModal('register_page')
        this.props.toggleModal('login_page')
    }}
    >New User?</button>
  </p>
</div> 
</div>
</section>
</div>
</div>
</div>
    );
}}
export default LogIn;
