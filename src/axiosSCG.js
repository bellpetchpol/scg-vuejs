import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://frozen-meadow-13613.herokuapp.com/',
    timeout: 10000
})

export default instance
