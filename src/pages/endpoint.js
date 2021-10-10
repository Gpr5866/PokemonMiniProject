import { API } from "../helper/api";
import { API_UPLOAD } from "../helper/api";

export default class Endpoint{
    get_list_pokemon = () => {
        return API.get(`/pokemon`);
    };

    get_detail_pokemon = (nama_pokemon) => {
        return API.get(`pokemon/${nama_pokemon}`);
    };

    get_list_mypokemon = () => {
        return API_UPLOAD.get('/users');
    };

    catch_pokemon_baru = (data) => {
        return API_UPLOAD.post(`/users`, data);
    };

    get_detil_pokemon = (id) => {
        return API_UPLOAD.get(`/users/${id}`);
    };

    update_pokemon = (id, data) => {
        return API_UPLOAD.put(`/users/${id}`, data);
    }

    delete_pokemon_baru = (id) => {
        return API_UPLOAD.delete(`/users/${id}`);
    };

}