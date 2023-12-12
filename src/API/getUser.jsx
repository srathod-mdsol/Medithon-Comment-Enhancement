import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
});

export const getUsers = () => instance({
        'method':'GET',
        'url':'/comments/get_all_users',
})

export const addComments = (body) => instance({
    'method':'POST',
    'url':'/comments',
    'body':body
})