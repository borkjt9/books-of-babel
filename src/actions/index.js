import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_CATEGORIES = 'fetch_categories';
export const FETCH_MEDIA = 'fetch_media';

const ROOT_URL = 'http://localhost:8000/blog/wp-json/wp/v2'

export function fetchPosts(callback) {
  const request = axios.get(`${ROOT_URL}/posts`)

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchCategories() {
  const request = axios.get(`${ROOT_URL}/categories`)
  return {
    type: FETCH_CATEGORIES,
    payload: request
  };
}

export function fetchMedia() {
  const request = axios.get(`${ROOT_URL}/media`)
  return ({
    type: FETCH_MEDIA,
    payload: request
  });
}
