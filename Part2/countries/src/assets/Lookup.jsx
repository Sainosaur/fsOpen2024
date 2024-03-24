import axios from 'axios'

const nameData = () => {
    return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
}

export default {nameData}