import Axios from 'axios';

let key: string | undefined = '';
// check if key exist in cookies
if (typeof window !== 'undefined') {
  key = document.cookie
    .split('; ')
    .find(row => row.startsWith('cookie_name='))
    ?.split('=')[1];
}

let headers = {};
// conditionally set headers for auth and no-auth
if (key && key !== '' && key !== 'undefined') {
  headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${key}`
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
