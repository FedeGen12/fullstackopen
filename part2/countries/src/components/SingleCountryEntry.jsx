import CountryEntry from "./CountryEntry.jsx";
import countriesService from "../services/countries.jsx"
import {useState} from "react";

const iconWeatherAPI = (idIcon) => {
    return (`https://openweathermap.org/img/wn/${idIcon}@2x.png`)
}

const SingleCountryEntry = ({ country }) => {
    const [temperature, setTemperature] = useState(0)
    const [wind, setWind] = useState(0)
    const [idIcon, setIdIcon] = useState('')

    countriesService
        .getInfoWeather(country)
        .then(infoWeather => {
            setTemperature(infoWeather.main.temp)
            setWind(infoWeather.wind.speed)
            setIdIcon(infoWeather.weather[0].icon)
        })

    return (
        <div>
            <CountryEntry country={country} />

            <h1>Weather in {country.name.common}</h1>

            <p>Temperature: {temperature} Celcius</p>
            <img src={iconWeatherAPI(idIcon)} alt="icon weather"/>
            <p>Wind: {wind} m/s</p>
        </div>
    )
}

export default SingleCountryEntry