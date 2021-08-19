const axios = require('axios');

export const getPhotos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=14`);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}