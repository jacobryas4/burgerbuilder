import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6fc25.firebaseio.com/'
});

export default instance;