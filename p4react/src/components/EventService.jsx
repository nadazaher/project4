import React from 'react';

const EventService = (props) => {
    const {
        hostname,
        email,
        telephone,
        avgprice,
        usefullinks,
        description
    } = props.EventService;
    return (
        <div>
            <h1>Event Service Details:</h1>
            <div>Host Name: {hostname}</div>
            <div>Email: {email}</div>
            <div>Mobile number: {telephone}</div>
            <div>Average Price: {avgprice}</div>
            <div>Useful links: {usefullinks}</div>
            <div>Description: {description}</div>
        </div>
    );
};

export default EventService;
