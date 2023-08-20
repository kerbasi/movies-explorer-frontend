import { makeRequest } from "./utils";

import { API_URL } from './constants'

export function register(name, email, password) {
  return makeRequest(API_URL, 'signup', 'POST', true, { name, email, password })
}

export function login(email, password) {
  return makeRequest(API_URL, 'signin', 'POST', true, { email, password })
}

export function getUser() {
  return makeRequest(API_URL, 'users/me', 'GET', true)
}

export function logout() {
  return makeRequest(API_URL, "signout", "POST", true);
}

export function updateMe({ name, email }) {
  return makeRequest(API_URL, "users/me", "PATCH", true, {
    name,
    email,
  });
}

export function createMovie(movie) {
  const { country,
    director,
    duration,
    year,
    description,
    img,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN, } = movie
  return makeRequest(API_URL, `movies`, "POST", true, {
    country,
    director,
    duration,
    year,
    description,
    img,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  })
}

export function getMovies() {
  return makeRequest(API_URL, "movies", "GET", true);
}