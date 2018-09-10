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
    }],
    {email: "user3@test3.com",
    password: "123456",
    password_confirmation: "123456"
    }],
    {email: "user4@test4.com",
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
    description: "Been in business for 10 years. Played at many different clubs. Popular for all types of music",
    link: "https://instagram.com/ahmedeid13?utm_source=ig_profile_share&igshid=pkeigdinvytv",
    avg_price: "15,000 LE",
    user_id: 1
},
{ 
    type_of_service: "Venue",
    host: "Mena House",
    email: "menahouse@me.com",
    number: "201228454339",
    description: "Garden right infront of the pyramids. This is a dream for foreignors.",
    link: "https://weddinghubeg.com/wp-content/uploads/2017/10/Mena-House-Venues-Wedding-Hub-EG-Cairo-Egypt-2.jpg",
    avg_price: "100,000 LE",
    user_id: 1

},
{ 
    type_of_service: "Music",
    host: "DJ Hadi",
    email: "hadik@dj.com",
    number: "20122843924",
    description: "Specialty in weddings - have even played at many destination weddings.",
    link: "https://instagram.com/hadi.sabaa?utm_source=ig_profile_share&igshid=kcqkp1dgwyo7",
    avg_price: "20,000 LE",
    user_id: 2

},
{ 
    type_of_service: "Venue",
    host: "Four Seasons Nile Plaza",
    email: "fourseasons@me.com",
    number: "201223643937",
    description: "We treat are clients with the best service. You are guaranteed a smooth and unforgettable event. ",
    link: "https://weddinghubeg.com/wp-content/uploads/2017/10/Mena-House-Venues-Wedding-Hub-EG-Cairo-Egypt-2.jpg",
    avg_price: "150,000 LE",
    user_id: 2

},
{ 
    type_of_service: "Photography",
    host: "Ojo Studios",
    email: "photos@ojo.com",
    number: "2012233039334",
    description: "We offer all types of services from videography to standard photoshoots. We have a full team of expert photographers. ",
    link: "https://weddinghubeg.com/wp-content/uploads/2017/10/Mena-House-Venues-Wedding-Hub-EG-Cairo-Egypt-2.jpg",
    avg_price: "20,000 LE",
    user_id: 3

},
{ 
    type_of_service: "Photography",
    host: "Remon El Markiz",
    email: "remon@photos.com",
    number: "2012233039923",
    description: "I have managed the photography and videography for more than 100 weddings now in Egypt and have a great staff of assistants working with me.",
    link: "https://instagram.com/remonelmarkiz?utm_source=ig_profile_share&igshid=h2spivfw6dzo",
    avg_price: "30,000 LE",
    user_id: 4

},


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