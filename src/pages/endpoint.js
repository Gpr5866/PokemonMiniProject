import { API } from "../helper/api";
import { API_UPLOAD } from "../helper/api";

export default class Endpoint{
    get_list_pokemon = () => {
        return API.get(`/pokemon`);
    };

    get_detail_pokemon = (nama_pokemon) => {
        return API.get(`pokemon/${nama_pokemon}`);
    }

}