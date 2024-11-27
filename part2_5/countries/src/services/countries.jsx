import axios from "axios";

const allCountriesURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const API_key = import.meta.env.VITE_SOME_KEY

const weatherAPI = (lat, lon) => {
    return (
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    )
}

const getAllCountries = () => {
    const request = axios.get(allCountriesURL)
    return request.then(response => response.data )
}

const getInfoWeather = (country) => {
    const [lat, lon] = country.latlng;
    const request = axios.get(weatherAPI(lat, lon))
    return request.then(response => response.data )
}

export default {getAllCountries, getInfoWeather}