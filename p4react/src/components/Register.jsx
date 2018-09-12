import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            id: '',
            isLoggedIn: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const { name, value } = evt.target;
        this.setState({
            [name]: value,
        });
    }

    toggle(evt) {
        evt.preventDefault();
        this.props.toggle('registerForm');
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            email: '',
            password:'',
            id: ''
        })
        this.props.toggle('registerForm');
    }


    render () {
    return (
        <div>
<div className={this.props.register}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">New User Registration</p>
              <FontAwesomeIcon icon={["fas", "times"]} onClick={() => this.props.toggleModal('register_page')}/>
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
<button type="submit" value="Register" className="button is-primary" onClick={() => {
this.props.handleRegister(this.state.email, this.state.password)
this.props.toggleModal('register_page')
this.props.handleLinks('logged in landing')
    }}>

          Register
          </button>
  </p>
</div> 
</div>
</section>
</div>
</div>
</div>
    );
}}
export default Register;
