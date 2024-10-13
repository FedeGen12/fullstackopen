import axios from "axios";

const allCountriesURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllCountries = () => {
    const request = axios.get(allCountriesURL)
    return request.then(response => response.data )
}

export default {getAllCountries}