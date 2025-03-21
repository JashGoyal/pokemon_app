import axios from 'axios'

const api_details = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export default api_details