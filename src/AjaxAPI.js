import axios from "axios";

export async function getList(offset){
    return axios.get('http://api.dsutaxi.ml:8443/api/taxi/list?offset='+offset+'&count=100')
}

export async function getSearchResult(query, type, offset, count=100){
    return axios.get('http://api.dsutaxi.ml:8443/api/taxi/search?type='+type+'&q='+query+'&offset='+offset+'&count='+count)
}

export async function postUser(name, phone, password, location, destination){
    return axios.post('http://api.dsutaxi.ml:8443/api/taxi/user', {
        'user': {
            'name': name,
            'phone': phone,
            'password': password
        },
        'loc': {
            'location': location,
            'dest': destination
        }
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function deleteUser(user_id, password){
    return axios.delete('http://api.dsutaxi.ml:8443/api/taxi/user/'+user_id+'?pw='+password);
}