const baseUrl = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001/'
  : 'https://cookflix.herokuapp.com/';

export default {
  baseUrl,
};
