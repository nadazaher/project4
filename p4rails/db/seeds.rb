# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
EventService.destroy_all
Comment.destroy_all
Favorite.destroy_all

User.create([
    {email: "user@test.com",
    password: "123456",
    password_confirmation: "123456"
    },
    {email: "user2@test2.com",
    password: "123456",
    password_confirmation: "123456"
    }]
)


EventService.create([
{ 
    type_of_service: "Music",
    host: "DJ Ahmed Eid",
    email: "ahmed@dj.com",
    number: "201226484999",
    description: "Been in business for 10 years. Played at venues and weddings. Popular for variety",
    link: "https://i1.sndcdn.com/avatars-000199714306-tk3bdx-t500x500.jpg",
    avg_price: "15,000 LE",
    user_id: 1
},
{ 
    type_of_service: "Venue",
    host: "Mena House",
    email: "menahouse@me.com",
    number: "201228443939",
    description: "Garden right infront of the pyramids. This is a dream for foreignors.",
    link: "https://weddinghubeg.com/wp-content/uploads/2017/10/Mena-House-Venues-Wedding-Hub-EG-Cairo-Egypt-2.jpg",
    avg_price: "100,000 LE",
    user_id: 1

},
{ 
    type_of_service: "Music",
    host: "DJ Djunki",
    email: "junk@dj.com",
    number: "201228443939",
    description: "Mainly hiphop",
    link: "https://weddinghubeg.com/wp-content/uploads/2017/10/Mena-House-Venues-Wedding-Hub-EG-Cairo-Egypt-2.jpg",
    avg_price: "20,000 LE",
    user_id: 2

},
{ 
    type_of_service: "Venue",
    host: "Four Seasons Nile Plaza",
    email: "fourseasons@me.com",
    number: "201228443939",
    description: "Many different rooms to choose from",
    link: "https://weddinghubeg.com/wp-content/uploads/2017/10/Mena-House-Venues-Wedding-Hub-EG-Cairo-Egypt-2.jpg",
    avg_price: "150,000 LE",
    user_id: 2

}
])

Comment.create([
    { 
    event_service_id: 1 , 
    user_id: 1,
    content:"Best DJ ever!",
},
{ 
    event_service_id: 2 ,
    user_id: 1,
    content: "Best view of pyramids as backdrop",

},
{ 
    event_service_id: 1 , 
    user_id: 2,
    content:"Worst DJ ever!",
},
{ 
    event_service_id: 2 ,
    user_id: 2,
    content: "Worst view of pyramids as backdrop",

}
])

Favorite.create([
    { 
    event_service_id: 1 , 
    user_id: 1
},
{ 
    event_service_id: 2 ,
    user_id: 1

},
{ 
    event_service_id: 1 , 
    user_id: 2
},
{ 
    event_service_id: 2 ,
    user_id: 2

}
])