const baseUrl = window.location.hostname.includes('localhost')
    ? 'http://localhost:3001/'
    : 'https://gitcookflix.herokuapp.com/';

export default {
    baseUrl,
};