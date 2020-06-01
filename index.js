const fetch = require('node-fetch');
const URL = 'https://jsonplaceholder.typicode.com/users/'

const fetch_retry = (url, n) => fetch(url).catch(function (error) {
    if (n === 1) throw error;
    return fetch_retry(url, --n);
});

fetch_retry(URL, 5)
    .then(response => response.json())
    .then(result => console.log(result.length));
