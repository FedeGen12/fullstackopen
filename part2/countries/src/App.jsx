import countriesService from "./services/countries.jsx"

import {useEffect, useState} from "react";
import CountriesList from "./components/CountriesList.jsx";
import Filter from "./components/Filter.jsx";


function App() {
    const [countries, setCountries] = useState(null)
    const [filteredCountries, setFilteredCountries] = useState(null)
    const [stateCountries, setStateCountries] = useState({});

    useEffect(() => {
        countriesService
            .getAllCountries()
            .then(countries => {
                setCountries(countries.map(country => ({ data: country, showed: false })))
            })
    }, []);

    return (
        <div>
            <Filter countries={countries}
                    setFilteredCountries={setFilteredCountries}
                    setStateCountries={setStateCountries}
            />

            <CountriesList countries={filteredCountries}
                           stateCountries={stateCountries}
                           setStateCountries={setStateCountries}
            />
        </div>
    )
}

export default App
