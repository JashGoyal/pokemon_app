import axios from 'axios'

const API_search = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=2000/'
})

export default API_search