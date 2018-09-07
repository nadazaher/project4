import React, { Component } from 'react';

class EventServiceByCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoggedIn: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }
}

    export default EventServiceByCategory;