import axios from 'axios';

export class PersonaService{
    baseUrl = 'http://localhost:8080/persona/'

    save(persona){
        return axios.post(this.baseUrl,persona).then(res => res.data);
    }
}