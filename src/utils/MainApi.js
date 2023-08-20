import { makeRequest } from "./utils";

import { API_URL } from './constants'

export function register(name, email, password) {
  return makeRequest(API_URL, 'signup', 'POST', false, { name, email, password })
}