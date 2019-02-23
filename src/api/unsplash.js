import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ff69b24e9d22ea2d7f8c0a9089cabfc207bb960f775e79c31a2ec8ed2b4ee72f'
    }
});