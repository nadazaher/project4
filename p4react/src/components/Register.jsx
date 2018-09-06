import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Register(props) {
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
        {/* when clicked on Register take to logged in landing page*/}
      Register
    </button>
  </p>
</div> 
</div>
    )
}
export default Register;