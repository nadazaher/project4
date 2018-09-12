const BASE_URL = process.env.REACT_APP_BASE_URL

export function getEventServices() {
  const jwt = localStorage.getItem("jwt")
  const init = {
    headers: { "Authorization": `Bearer ${jwt}` }
  }
  return fetch(`${BASE_URL}/event_services`, init)
    .then(res => res.json())
    .catch(err => err)
}

export function saveEventService(EventService) {
  const opts = {
    method: 'POST',
    body: JSON.stringify(EventService),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${BASE_URL}/event_services`, opts)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}

export function getOneEvent(id){
    return fetch(`${BASE_URL}/event_services/${id}`)
    .then(resp => {
        return resp.json()
    })
    .catch(err => {
        throw Error(err);
    });

}

export function modifyEventService(EventService) {
  console.log("nada", EventService)
  const opts = {
    method: 'PUT',
    body: JSON.stringify(EventService),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${BASE_URL}/event_services/${EventService.id}`, opts)
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
}


export function destroyEventService(id) {
  console.log("deleting", id)
  const opts = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${BASE_URL}/event_services/${id}`, opts)
    .catch(err => {
      throw Error(err);
    });
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
    .then(resp => resp.json())
    .catch(err => console.log(err))
}

export function userRegister(loginInfo) {

  const url = `${BASE_URL}/users`;
  const body = { "user": loginInfo }
  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(body),
  }
  return fetch(url, init)
    .then(res => res.json())
    .then(res => {
      userLogin(loginInfo)
    })
    .catch(err => console.log(err))
}

