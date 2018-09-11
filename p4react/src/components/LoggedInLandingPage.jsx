import React, { Component } from 'react';
import CreateES from './CreateES';

class LoggedInLandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventservices: {
                hostname: '',
                email: '',
                telephone: '',
                avgprice: '',
                usefullinks: '',
                checkbox: false,
                selectdropdown: 'Select Dropdown',
                description: ''
                },
            selectedCategory: null
        };

        // this.handleChange = this.handleChange.bind(this);
       
    }

    // showCategory

//funtions go here


    render () {
        return (
<div>
<center><button className="createbutton" onClick={() => this.props.toggleModal('createES_page')}>Create New Service</button></center>

 <CreateES createES={this.props.createEV} toggleModal={this.props.toggleModal} createEventService={this.props.createEventService} userInfo={this.props.userInfo} handleLinks={this.props.handleLinks}
 /> 
        <div>
            <div className="LandingContent-new">
                <div className="grid-container">
                <div className="grid-item"><img className="homepic" src ="https://www.apple.com/v/apple-music/h/images/shared/og_image.png?201808060701" alt="music"
                                onClick={() => {
                                    this.props.setCategory('Music')
                                    this.props.handleLinks('one-category-display');
                                }}/>
                Music
               </div>
                <div className="grid-item"><img className="homepic" src = "https://shelbycountyartscouncil.com/wp-content/uploads/2017/09/pexels-photo-226243.jpeg" alt="photography"
                onClick={() => {
                    this.props.setCategory('Photography')
                    this.props.handleLinks('one-category-display');
                }}/>
                Photography
                </div>
                <div className="grid-item"><img className="homepic" alt="venues"
                src="https://weddinghubeg.com/wp-content/uploads/2017/10/Four-Seasons-Hotel-Cairo-Nile-Plaza-Wedding-Hub-EG-Cairo-Egypt-1.jpg"
                onClick={() => {
                    this.props.setCategory('Venue')
                    this.props.handleLinks('one-category-display');
                }}/>Venues</div>
                <div className="grid-item"><img className="homepic" 
                alt="catering"
                src ="http://www.body-harness.com/wp-content/uploads/2018/06/How-To-Choose-The-Right-Finger-Food-Catering-For-Your-Next-Event.png"
                onClick={() => {
                    this.props.setCategory('Catering')
                    this.props.handleLinks('one-category-display');
                }}/>
                Catering</div>
                <div className="grid-item"><img className="homepic" 
                alt="make-up"
                src ="http://www.salonsuitesolutions.com/wp-content/uploads/2017/07/Makeup.jpg"
                onClick={() => {
                    this.props.setCategory('Make-Up')
                    this.props.handleLinks('one-category-display');
                }}/>
                Make-Up</div>
                <div className="grid-item"><img className="homepic" 
                alt="florists"
                src ="http://ourweddingideas.com/cdn/file/incredible-wedding-flower-arrangements-wedding-decoration-flower-arrangements-wedding-decorations.jpg"
                onClick={() => {
                    this.props.setCategory('Florist')
                    this.props.handleLinks('one-category-display');
                }}/>Florists</div>

                </div>
            </div>
            </div>
</div>
    );
}}
export default LoggedInLandingPage;