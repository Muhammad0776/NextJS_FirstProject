const axios = require('axios');

export const getPosts = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=8`);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}