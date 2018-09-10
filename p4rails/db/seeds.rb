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
    },
    {email: "user3@test3.com",
    password: "123456",
    password_confirmation: "123456"
    },
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
    type_of_service: "Music",
    host: "For testing",
    email: "For testing",
    number: "#fortesting",
    description: "For testing",
    link: "For testing",
    avg_price: "$fortesting",
    user_id: 1
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
    type_of_service: "Venue",
    host: "For testing",
    email: "For testing",
    number: "#fortesting",
    description: "For testing",
    link: "For testing",
    avg_price: "$fortesting",
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
{ 
    type_of_service: "Photography",
    host: "For testing",
    email: "For testing",
    number: "#fortesting",
    description: "For testing",
    link: "For testing",
    avg_price: "$fortesting",
    user_id: 1
},

{ 
    type_of_service: "Catering",
    host: "Crave",
    email: "crave@food.com",
    number: "2012233039343",
    description: "We provide full catering menus to all kinds of events and venues. Feel free to contact us to discuss menu options.",
    link: "https://instagram.com/crave_egypt?utm_source=ig_profile_share&igshid=1ewr48om1eyzj",
    avg_price: "80,000 LE",
    user_id: 4

},

{ 
    type_of_service: "Catering",
    host: "Le Pacha",
    email: "lepacha@food.com",
    number: "2012233039343",
    description: "Five-star quality food from a selection of many cuisines. Been in business since 1907 so fully experienced",
    link: "https://instagram.com/lepachazamalek?utm_source=ig_profile_share&igshid=1v87jzahcizom",
    avg_price: "120,000 LE",
    user_id: 2

},
{ 
    type_of_service: "Catering",
    host: "For testing",
    email: "For testing",
    number: "#fortesting",
    description: "For testing",
    link: "For testing",
    avg_price: "$fortesting",
    user_id: 3
},


{ 
    type_of_service: "Make-Up",
    host: "Kiki",
    email: "kiki@beautique.com",
    number: "2012233039345",
    description: "Certified from NYC make up school and been practicing for over ten years. I mainly do bridal makeup and can offer one trial before. Check out my Instagram page to see the best of my works",
    link: "https://instagram.com/kikibeautique?utm_source=ig_profile_share&igshid=1pf6iua6s557q",
    avg_price: "$700",
    user_id: 3

},

{ 
    type_of_service: "Make-Up",
    host: "Sally Rashid",
    email: "sally@makeup.com",
    number: "2012233039402",
    description: "Brand ambassador and make-up instructor for L'oreal products. My specialty is the browns for eyeshadow. You can see my style on my Instagram.",
    link: "https://instagram.com/sallyrashid_?utm_source=ig_profile_share&igshid=4johfo5591l0",
    avg_price: "$500",
    user_id: 1

},

{ 
    type_of_service: "Make-Up",
    host: "For testing",
    email: "For testing",
    number: "#fortesting",
    description: "For testing",
    link: "For testing",
    avg_price: "$fortesting",
    user_id: 2
},


{ 
    type_of_service: "Florist",
    host: "Flower Power",
    email: "flowerpower@events.com",
    number: "2012233029384",
    description: "First florist in Cairo. Handles top events and is known for importing flowers which are a lot more fresh and last longer. Feel free to contact us for more information and a quote for your event.",
    link: "https://instagram.com/flowerpowerdesign?utm_source=ig_profile_share&igshid=166nbgwnyhcrs",
    avg_price: "120,000 LE",
    user_id: 1

},

{ 
    type_of_service: "Florist",
    host: "Violette",
    email: "violette@events.com",
    number: "20122330293920",
    description: "Headquartered in Alexandria so most of our clients are Alexandrian. Collaborated with many venues here in Alexandria and would love to look into more events with you as needed.",
    link: "https://instagram.com/florists?utm_source=ig_profile_share&igshid=1g8yd93hgivya",
    avg_price: "80,000 LE",
    user_id: 4

},
{ 
    type_of_service: "Florist",
    host: "For testing",
    email: "For testing",
    number: "#fortesting",
    description: "For testing",
    link: "For testing",
    avg_price: "$fortesting",
    user_id: 3
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