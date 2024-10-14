import {useState} from "react";

const Filter = ({ countries, setFilteredCountries, setStateCountries }) => {
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)

    const handlerChangeFilter = (event) => {
        const currFilter = event.target.value
        setFilter(currFilter)

        if (countries == null) { return; }

        let filteredCountries = countries.filter(country => country.data.name.common.toLowerCase().includes(currFilter.toLowerCase()))
        let message = null
        let newStateCountries = {};

        if (filteredCountries.length > 10) {
            message = "Too many matches, specify another filter"
            filteredCountries = null
        } else {
            newStateCountries = filteredCountries.reduce((diccAccum, country) => {
                diccAccum[country.data.name.common] = country;
                return diccAccum;
            }, {});
        }

        setFilteredCountries(filteredCountries)
        setMessage(message)
        setStateCountries(newStateCountries)
    }

    return (
        <div>
            find countries: <input value={filter}
                                   onChange={handlerChangeFilter} />

            <p>{message}</p>
        </div>
    )
}

export default Filter