import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateES(props) {
    return (
        <div class="createform">
        <h1 class="formtitle"> ADD YOUR SERVICE</h1>

<div class="field">
  <div class="field">
    <label class="label">Contact Info</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Host Name"/>
        <span class="icon is-small is-left">
        <FontAwesomeIcon icon={["fas", "user"]}/>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email"/>
        <span class="icon is-small is-left">
        <FontAwesomeIcon icon={["fas", "envelope"]}/>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +2
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="tel" placeholder="Your phone number"/>
        </p>
      </div>
    </div>
  </div>
</div>


<div class="field">
<label class="label">Type of Service</label>
<div class="control">
  <div class="select">
    <select>
        <option selected>Select dropdown</option>
      <option>Catering</option>
      <option>Florists</option>
      <option>Make-Up</option>
      <option>Music</option>
      <option>Photography</option>
      <option>Venue</option>
    </select>
  </div>
</div>
</div>

<div class="field">
<label class="label">Average Price</label>
<div class="control">
  <input type="number" class="input"/>
</div>
</div> 

<div class="field">
<label class="label">Useful Links</label>
<div class="control">
  <input type="text" class="input"/>
</div>
</div> 

<div class="field">
<label class="label">Description</label>
<div class="control">
  <textarea class="textarea" placeholder="Please tell us more about your experience in the field and what makes you stand out!"></textarea>
</div>
</div>

<div class="field">
<div class="control">
    <input type="checkbox"/>
    <label class="checkbox">
    I agree to the <a href="#">terms and conditions</a> 
  </label>
</div>
</div>

<div class="field is-grouped">
<div class="control">
  <button class="button is-primary">Submit</button>
</div>
<div class="control">
  <button class="button is-text">Cancel</button>
</div>
</div>
</div>

    )
}
export default CreateES;