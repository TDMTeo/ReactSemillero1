import axios from 'axios';

export class RolService{
    baseUrl = 'http://localhost:8080/rol/'
    getAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }
}