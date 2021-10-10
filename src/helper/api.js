import axios from 'axios';
import baseURL from './../config';
import CRUDpokemon from './../config2';

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
    baseURL: CRUDpokemon,
    headers: { 'Accept': 'application/json' },
});


export { fetchJSON , API, API_UPLOAD };

