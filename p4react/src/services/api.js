const BASE_URL = process.env.REACT_APP_API_URL

export function getEventServices() {
    const jwt = localStorage.getItem("jwt")
    const init = {
        headers: { "Authorization": `Bearer ${jwt}` }
    }
    return fetch(`${BASE_URL}/event_services`, init)
        .then(res => res.json())
        .catch(err => err)
}


export function userLogin(loginInfo) {
    const url = `${BASE_URL}/user_token`;
    const body = { "auth": loginInfo }
    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(body),
    }
    return fetch(url, init)
        .then(res => res.json())
        .catch(err => console.log(err))
}