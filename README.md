# Event Planner Guide in Egypt

# Intro
This app will help people in Egypt create their events - mainly weddings and engagement parties. There will be a list of event servies meaning the top DJs, photographers, venues, florists, and food caterers in Egypt and users can add/edit an event service. Each event service will have contact info, description, and pictures/links to their works. This is inspired by the fact that there are a large number of events like that in Egypt and everyone pretty much uses the same few services.

# User Stories

User = to-be bride and groom in Egypt

CREATE, READ, UPDATE, DELETE:
- As a user, I can see a list of all event services by category/type of service.
- As an user, I can create an event service.
- As a user, I can delete an event service.
- As a user, I can edit an event service.

# Setup Instructions

Clone this repo down
cd into repo
cd into p4rails
- bundle install
- rails db:drop
- rails db:create
- rails db:migrate
- rails db:seed
- rails s
cd into p4react
- yarn install
- yarn start

Deployed Link - http://event-services-egypt.surge.sh/

# Code Snippet


```javascript

// filtering through all services by type of category and returning the services of that category in the next page

render() {
    const filteredServices = this.props.eventServices.filter(cat => cat.type_of_service === this.props.currentCategory)
    return (
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

                        <div className="description">

                          <strong>Host Name:</strong><p>{service.host}</p>
                          <strong>Email:</strong><p>{service.email}</p>
                          <strong>Phone Number:</strong><p>{service.number}</p>
                          <strong>Description of Service:</strong><p> {service.description}</p>
                          <strong>Average price: </strong><p>{service.avg_price}</p>
                          <strong>Useful links: </strong><p><a href={service.link}>{service.link}</a></p>
                          <strong>Created at:</strong><p>{service.created_at}</p>
                          
                        </div>
            </div>
        </div>
    </div>    
```

# Screenshots
<img width="1239" alt="screen shot 2018-09-13 at 4 05 48 pm" src="https://user-images.githubusercontent.com/39905330/45512855-06509f80-b76f-11e8-9d22-baed8b29f6d3.png">
<img width="581" alt="screen shot 2018-09-13 at 4 05 57 pm" src="https://user-images.githubusercontent.com/39905330/45512857-06509f80-b76f-11e8-8391-e0f228211b6e.png">
<img width="722" alt="screen shot 2018-09-13 at 4 06 07 pm" src="https://user-images.githubusercontent.com/39905330/45512858-06509f80-b76f-11e8-806f-1232389fc3d5.png">
<img width="885" alt="screen shot 2018-09-13 at 4 06 15 pm" src="https://user-images.githubusercontent.com/39905330/45512859-06509f80-b76f-11e8-945a-b9010e0a7660.png">

# Technologies Used
- Backend: Rails
- Database: PSQL
- Frontend: React
- Auth: Knox with Bcrypt

# Post MVP
- As a user, I can comment/like an event service and view other people's comments/likes
- As a user, I can see a list of my liked/favorited services
- Responsive design 
- Share a service you like with a friend via message/email
- Admin to control service posts if fake
- Rating of services instead of just likes
- Services within services
- More detailed price listings and filters
- Log in with Facebook

# Citations
- https://bulma.io/documentation/ - Bulma for overall styling
- https://www.npmjs.com/package/@fortawesome/react-fontawesome - For icons

