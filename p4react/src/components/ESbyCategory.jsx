import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ESbyCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventServices: {
        hostname: '',
        email: '',
        telephone: '',
        avgprice: '',
        usefullinks: '',
        checkbox: false,
        selectdropdown: 'Select Dropdown',
        description: '',
        created_at: ''
      }
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const filteredServices = this.props.eventServices.filter(cat => cat.type_of_service === this.props.currentCategory)
    return (

      <div className="ESOneContent">
        <div className="grid-container container-services">
          {filteredServices.map((service => (
            <div className="grid-item-services">

              <div className="box" onClick={() => {
                    this.props.setEventService(service.id)
                    this.props.handleLinks('detailed-display');
                }}>
                <article className="media">
                  <div className="media-left">

                    <div className="media-content">
                      <div className="content">
                        <div>
                          <p className="description">

                            <strong>Host Name:</strong><p>{service.host}</p>
                            <strong>Email:</strong><p>{service.email}</p>
                            <strong>Phone Number:</strong><p>{service.number}</p>
                            <strong>Description of Service:</strong><p> {service.description}</p>
                            <strong>Average price: </strong><p>{service.avg_price}</p>
                            <strong>Useful links: </strong><p><a href={service.link}>{service.link}</a></p>

                            <strong>Created at:</strong><p>{service.created_at}</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <a class="level-item" aria-label="like">
                      <span class="icon is-small">
                        <FontAwesomeIcon icon={["far", "heart"]} aria-hidden="true" />
                      </span>
                    </a>

                  </div>
                </article>
              </div>
            </div>
          )))}
      

        </div>
      </div>
    )
  }
}



export default ESbyCategory;