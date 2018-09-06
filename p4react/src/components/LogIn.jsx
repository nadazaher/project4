import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LogIn(props) {
    return (
<div>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email"/>
    <span class="icon is-small is-left">
        <FontAwesomeIcon icon={["fas", "envelope"]}/>
    </span>
    <span class="icon is-small is-right">
        <FontAwesomeIcon icon={["fas", "check"]}/>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password"/>
    <span class="icon is-small is-left">
        <FontAwesomeIcon icon={["fas", "lock"]}/>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success">
    {/* when clicked takes you to loggedin landing page */}
      Login
    </button>
    {/* when clicked on new user take to register modal */}
    <button class="button is-text">New User?</button>
  </p>
</div> 
</div>
    )
}
export default LogIn;