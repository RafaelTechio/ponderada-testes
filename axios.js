const Axios = require('axios');

const axios = new Axios.Axios({
    baseURL: 'http://localhost:3000/'
});

module.exports = axios;

