import { makeRequest } from "./utils";

import { MOVIES_URL } from './constants'

export function getMovies() {
  return makeRequest(MOVIES_URL, 'beatfilm-movies')
}