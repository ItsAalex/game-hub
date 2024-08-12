import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '348655e89cfc46a79a09a175a2bcfe6c'
    }
})
