import axios from 'axios';

let _apiHost: string = "https://reqres.in/api";

export function url(suffix: string) {
  return _apiHost+suffix
} 

export function api() {
  const instance = axios.create({
    baseURL: _apiHost,
  });

  return instance;
}
