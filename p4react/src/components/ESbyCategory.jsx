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
            <div 
            className="grid-item-services">

              <div className="box" 
              onClick={() => {
                    this.props.setEventService(service.id)
                    this.props.handleLinks('detailed-display')
                    // this.props.handleESLink('detailed-display', this.props.currentES)
                }}>

                <FontAwesomeIcon icon={["fas", "trash-alt"]} className="delete2" onClick={() => {
                  console.log("clicked")
              this.props.deleteEventService(this.props.currentES)
              this.props.handleLinks('logged in landing');}}
                />
                
                <article className="media">
                  <div className="media-left">
                  <figure className="image is-96x96 is-left" >
        <img src="http://www.cairoscene.com/Content/Admin/Uploads/EventsImages/66ed1f7d-2e9f-4e8e-82e4-bfaafe28f0e0.jpg" alt="imggg"/>
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
        <div className="level-left">
                              <a className="level-item" >
            <span className="icon is-small">
            <FontAwesomeIcon icon={["fas", "pencil-alt"]} className="edit" 
            onClick={() => {
              this.props.toggleModal('editESPage'); 
             this.props.updateEventService(this.props.currentES)
            }}         />  
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