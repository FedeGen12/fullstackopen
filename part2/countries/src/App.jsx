// import SearchBar from "./components/SearchBar.jsx";
import countriesService from "./services/countries.jsx"

import {useEffect, useState} from "react";
import CountriesList from "./components/CountriesList.jsx";
import Filter from "./components/Filter.jsx";


function App() {
    const [countries, setCountries] = useState(null)
    const [filteredCountries, setFilteredCountries] = useState(null)

    useEffect(() => {
        countriesService
            .getAllCountries()
            .then(countries => { setCountries(countries) })
    }, []);

    return (
        <div>
            <Filter countries={countries}
                    setFilteredCountries={setFilteredCountries}
            />

            <CountriesList countries={filteredCountries} />
        </div>
    )
}

export default App
