# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Comment.destroy_all
EventService.destroy_all

EventService.create([
{ 
    type_of_service: "DJ",
    host: "DJ Ahmed Eid",
    contact_info: "+201226484999",
    description: "Been in business for 10 years. Played at venues and weddings. Popular for variety",
    link: "https://i1.sndcdn.com/avatars-000199714306-tk3bdx-t500x500.jpg",
    avg_price: "15,000 LE",

},
{ 
    type_of_service: "Venue",
    host: "Mena House",
    contact_info: "+201228443939",
    description: "Garden right infront of the pyramids. This is a dream for foreignors.",
    link: "https://weddinghubeg.com/wp-content/uploads/2017/10/Mena-House-Venues-Wedding-Hub-EG-Cairo-Egypt-2.jpg",
    avg_price: "100,000 LE",

}
])

Comment.create([
    { 
    event_service_id: 1 , 
    content:"Best DJ ever!",
},
{ 
    event_service_id: 2 ,
    content: "Best view of pyramids as backdrop",

}
])

User.create(
    {email: "user@test.com",
    password: "123456",
    password_confirmation: "123456"
    }
)

