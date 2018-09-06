import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateES(props) {
    return (
        <div className="createform">
        <h1 className="formtitle"> ADD YOUR SERVICE</h1>

<div className="field">
  <div className="field">
    <label className="label">Contact Info</label>
  </div>
  <div className="field-body">
    <div className="field">
      <p className="control is-expanded has-icons-left">
        <input className="input" type="text" placeholder="Host Name"/>
        <span className="icon is-small is-left">
        <FontAwesomeIcon icon={["fas", "user"]}/>
        </span>
      </p>
    </div>
    <div className="field">
      <p className="control is-expanded has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email"/>
        <span className="icon is-small is-left">
        <FontAwesomeIcon icon={["fas", "envelope"]}/>
        </span>
      </p>
    </div>
  </div>
</div>

<div className="field">
  <div className="field-label"></div>
  <div className="field-body">
    <div className="field is-expanded">
      <div className="field has-addons">
        <p className="control">
          <a className="button is-static">
            +2
          </a>
        </p>
        <p className="control is-expanded">
          <input className="input" type="tel" placeholder="Your phone number"/>
        </p>
      </div>
    </div>
  </div>
</div>


<div className="field">
<label className="label">Type of Service</label>
<div className="control">
  <div className="select">
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

<div className="field">
<label className="label">Average Price</label>
<div className="control">
  <input type="number" className="input"/>
</div>
</div> 

<div className="field">
<label className="label">Useful Links</label>
<div className="control">
  <input type="text" className="input"/>
</div>
</div> 

<div className="field">
<label className="label">Description</label>
<div className="control">
  <textarea className="textarea" placeholder="Please tell us more about your experience in the field and what makes you stand out!"></textarea>
</div>
</div>

<div className="field">
<div className="control">
    <input type="checkbox"/>
    <label className="checkbox">
    I agree to the <a href="#">terms and conditions</a> 
  </label>
</div>
</div>

<div className="field is-grouped">
<div className="control">
  <button className="button is-primary">Submit</button>
</div>
<div className="control">
  <button className="button is-text">Cancel</button>
</div>
</div>
</div>

    )
}
export default CreateES;