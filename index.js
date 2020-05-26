const fetch = require('node-fetch');
const URL = 'https://jsonplaceholder.typicode.com/users/'

const fetch_retry = async (url, n) => {
    try {
        return await fetch(url)
    } catch (err) {
        if (n === 1) throw err;
        return await fetch_retry(url, --n);
    }
};

fetch_retry(URL, 5)
    .then(response => response.json())
    .then(result => console.log(result.length));