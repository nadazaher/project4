const BASE_URL = process.env.REACT_APP_API_URL

function getEventServices() {
return fetch(BASE_URL +  '/event_services')
.then(resp => resp.json())
.then(resp => console.log(resp))
}

export default getEventServices;