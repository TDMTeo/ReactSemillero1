import axios from 'axios';

export class TareaService{
    baseUrl = 'http://localhost:8080/tarea/'
    getAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }
}