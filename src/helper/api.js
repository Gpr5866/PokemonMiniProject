import axios from 'axios';
import baseURL from './../config';

const fetchJSON = (url, options = {}) => {
    return fetch(url, options)
        .then(response => {
            if (!response.status === 200) {
                throw response.json();
            }
            return response.json();
        })
        .then(json => {
            return json;
        })
        .catch(error => {
            throw error;
        });
};
    
const API = axios.create({
    baseURL: baseURL,
    headers: { 'Accept': 'application/json' },
});

const API_UPLOAD = axios.create({
    baseURL: baseURL,
    headers: { 'Accept': 'application/json', 'Content-Type': 'multipart/form-data; charset=utf-8; boundary="another cool boundary";' },
});


export { fetchJSON , API, API_UPLOAD };

