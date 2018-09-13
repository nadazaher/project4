# Event Planner Guide in Egypt

Link to deployed app - http://event-services-egypt.surge.sh/

# Intro
This app will help people in Egypt create their events - mainly weddings and engagement parties. There will be a list of event servies meaning the top DJs, photographers, venues, florists, and food caterers in Egypt and users can add an event service or comment/like another event service. Each event service will have contact info, description, and pictures/links to their works. This is inspired by the fact that there are a numerous amount of events like that in Egypt and everyone pretty much uses the same few services.

# User Stories
- As a user, I can see a list of all event services by category/type of service.
- As an user, I can create an event service.
- As a user, I can comment/like an event service and view other people's comments/likes.
- As a user, I can delete an event service.
- As a user, I can edit an event service.
- As a user, I can see a list of my liked/favorited services.

# Initial ERD
![img_8151](https://media.git.generalassemb.ly/user/14908/files/d663c23e-b02a-11e8-8ace-a693aa95ec07)

# Initial Wireframes
![img_8939](https://media.git.generalassemb.ly/user/14908/files/ddef5626-b02a-11e8-9bfb-4c91b8dae440)
![img_9218](https://media.git.generalassemb.ly/user/14908/files/deca52d0-b02a-11e8-968b-047756769240)

# Timeline
1) START WITH EVENTSERVICE/COMMENTS
-	 Comments belong to event
-	Event has many comments
-	Show all event services – always with comments
2) THEN EVENTSSERVICE/USER
3) THEN EVENTSERVICE/LIKES

# Technologies Used
- Backend: Rails
- Database: PSQL
- Frontend: React
- Auth: TBD

# Post MVP
- Share a service you like with a friend via message/email
- Admin to control service posts if fake
- Rating of services instead of just likes
- Services within services
- More detailed price listings and filters
- Responsive design 
- Log in with Facebook
