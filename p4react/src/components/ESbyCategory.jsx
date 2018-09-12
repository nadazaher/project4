import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditEventService from './editEventService';

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
        image: '',
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
        <EditEventService
          toggleModal={this.props.toggleModal}
          updateEventService={this.props.updateEventService}
          handleLinks={this.props.handleLinks}
          userInfo={this.props.userInfo}
          editESPage={this.props.editESPage}
          currentES={this.props.oneService}
        />
        <div className="grid-container container-services">
          {filteredServices.map((service => (

            <div
              key={service.id}

              className="grid-item-services">

              <div className="box"
                onClick={(e) => {
                  console.log(service.id)
                  this.props.setEventService(service.id)
                  this.props.handleLinks('one-category-display')
                }}>

              
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-96x96 is-left" >
                      <img src={service.image} alt="Insert Here" />
                    </figure>
                  </div>


                  <div className="media-content">
                    <div className="content">
                      <div>
                        <div className="description">

                          <strong>Host Name:</strong><p>{service.host}</p>
                          <strong>Email:</strong><p>{service.email}</p>
                          <strong>Phone Number:</strong><p>{service.number}</p>
                          <strong>Description of Service:</strong><p> {service.description}</p>
                          <strong>Average price: </strong><p>{service.avg_price}</p>
                          <strong>Useful links: </strong><p><a href={service.link}>{service.link}</a></p>

                          <strong>Created at:</strong><p>{service.created_at}</p>


                          <nav className="level is-mobile">
                            <div className="level-left"
                              onClick={(e) => {
                                e.preventDefault()
                              }}>
                              <a className="level-item" >
                                <span className="icon is-small">
                                  <FontAwesomeIcon icon={["fas", "pencil-alt"]} className="edit"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      console.log("editing")
                                      this.props.toggleModal('editESPage');
                                      
                                    }} />
                                </span>
                              </a>
                              <a className="level-item" >
                                <span className="icon is-small">
                                  <FontAwesomeIcon icon={["fas", "trash-alt"]} className="delete2" onClick={(e) => {
                                    e.preventDefault();
                                    console.log("clicked")
                                    this.props.setEventService(service.id)
                                    this.props.deleteEventService(service)
                                    this.props.handleLinks('one-category-display');
                                  }} />
                                </span>
                              </a>




                            </div>
                          </nav>

                        </div>
                      </div>
                    </div>
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