import { MOVIES_TIME_LIMIT } from "./constants";

export function makeRequest(url, endPoint, method, credentials, body) {
  return fetch(`${url}${endPoint}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: method ? method : 'GET',
    credentials: credentials ? 'include' : 'omit',
    body: body ? JSON.stringify(body) : null,
  }).then(res => {
    const data = res.json()
    return res.ok ? data : data.then((err) => Promise.reject(`${err.message}`));
  })
}

export function calculateDuration(time) {
  const mins = time % 60;
  const hours = Math.floor(time / 60);
  return `${hours}ч ${mins}м`;
}

export function filterMoviesByName(list, query) {
  if (!list.length) return list
  return list.filter(item => (item.nameRU.toLowerCase().includes(query.toLowerCase()) || item.nameEN.toLowerCase().includes(query.toLowerCase())))
}

export function filterMoviesByTime(list) {
  if (!list.length) return list
  return list.filter(item => item.duration <= MOVIES_TIME_LIMIT)
}
