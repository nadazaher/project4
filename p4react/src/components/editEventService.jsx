import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditEventService extends Component {
  constructor(props) {
    super(props);
    const eventService = props;
    this.state = {
      hostname: eventService.hostname,
      email: eventService.email,
      telephone: eventService.telephone,
      avgprice: eventService.avgprice,
      usefullinks: eventService.usefullinks,
      checkbox: eventService.checkbox,
      selectdropdown: eventService.selectdropdown,
      description: eventService.description
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);

  }

  toggle(evt) {
    evt.preventDefault();
    this.props.toggle('editESpage');
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const data = {

      host: this.state.hostname,
      email: this.state.email,
      number: this.state.telephone,
      avg_price: this.state.avgprice,
      link: this.state.usefullinks,
      checkbox: this.state.checkbox,
      type_of_service: this.state.selectdropdown,
      description: this.state.description,
      user_id: this.props.userInfo
        }
    this.props.updateEventService(data);
  }

  handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (

      <div className={this.props.editESPage}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit Event Service</p>
            <FontAwesomeIcon icon={["fas", "times"]} onClick={() => this.props.toggleModal('editESPage')} />
          </header>
          <section className="modal-card-body">
            <div>


              <div className="createform">


                <div className="field">
                  <div className="field">
                    <label className="label">Contact Info</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded has-icons-left">
                        <input className="input" type="text" name="hostname"
                          value={this.state.hostname} onChange={this.handleChange} 
                          />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={["fas", "user"]} />
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control is-expanded has-icons-left has-icons-right">
                        <input className="input" type="text" name="email"
                          value={this.state.email} onChange={this.handleChange} />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={["fas", "envelope"]} />
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
                          <input className="input" type="text" name="telephone"
                            value={this.state.telephone} onChange={this.handleChange} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="field">
                  <label className="label">Type of Service</label>
                  <div className="control">
                    <div className="select">
                      <select name="selectdropdown" value={this.state.selectdropdown} onChange={this.handleChange}>
                        {/* <option selected>Select dropdown</option> */}
                        <option>Select Dropdown</option>
                        <option>Catering</option>
                        <option>Florist</option>
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
                    <input type="text" name="avgprice" className="input"
                      value={this.state.avgprice} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Useful Links</label>
                  <div className="control">
                    <input type="text" name="usefullinks" className="input"
                      value={this.state.usefullinks} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea className="textarea" name="description"
                      value={this.state.description} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input type="checkbox" name="checkbox" value={this.state.checkbox} onChange={this.handleInputChange} />
                    <label className="checkbox">
                      I agree to the <a href="www">terms and conditions</a>
                    </label>
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-primary" onClick={(e) => {
                      this.props.updateEventService({
                        host: this.state.hostname,
                        email: this.state.email,
                        number: this.state.telephone,
                        avg_price: this.state.avgprice,
                        link: this.state.usefullinks,
                        checkbox: this.state.checkbox,
                        type_of_service: this.state.selectdropdown,
                        description: this.state.description,
                        user_id: this.props.userInfo,
                        id: this.props.currentES.id
                      })
                      this.props.toggleModal('editESPage')
                    }}>Edit
                    </button>


                  </div>

                  <div className="control">
                    <button className="button is-text" onClick={() => this.props.toggleModal('editESPage')}>Cancel</button>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>



    )
  }
}
export default EditEventService; 
