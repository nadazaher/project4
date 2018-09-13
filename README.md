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

# Initial ERD
![img_8151](https://media.git.generalassemb.ly/user/14908/files/d663c23e-b02a-11e8-8ace-a693aa95ec07)

# Initial Wireframes
![img_8939](https://media.git.generalassemb.ly/user/14908/files/ddef5626-b02a-11e8-9bfb-4c91b8dae440)
![img_9218](https://media.git.generalassemb.ly/user/14908/files/deca52d0-b02a-11e8-968b-047756769240)

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

