import Axios from 'axios';
import { getCookie } from 'cookies-next';

const token: any = getCookie('cookie-name'); //replace cookie-name with your own value

let headers = {};

// conditionally set headers for auth and no-auth
if (token) {
  headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  };
} else {
  headers = {
    Accept: 'application/json'
  };
}

export const axios = Axios.create({
  baseURL: 'base_url_here',
  headers: headers
});
