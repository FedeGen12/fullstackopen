import {useState} from "react";

const Filter = ({ countries, setFilteredCountries }) => {
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)

    const handlerChangeFilter = (event) => {
        const currFilter = event.target.value
        setFilter(currFilter)

        if (countries == null) { return; }

        let filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(currFilter.toLowerCase()))
        let message = null

        if (filteredCountries.length > 10) {
            message = "Too many matches, specify another filter"
            filteredCountries = null
        }

        setFilteredCountries(filteredCountries)
        setMessage(message)
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