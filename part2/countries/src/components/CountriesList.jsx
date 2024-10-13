const CountriesList = ({ countries }) => {
    if (countries == null) {
        return null
    }

    if (countries.length === 1) {
        const country = countries[0]

        return (
            <div>
                <h1>{country.name.common}</h1>

                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>

                <h2>Languages</h2>
                <ul>
                    {Object.keys(country.languages).map(
                        language => <li key={language}>{country.languages[language]}</li>
                    )}
                </ul>

                <img className="imgFlag" src={country.flags["svg"]} alt={country.flags["alt"]} />

            </div>
        )
    }

    return (
        <div>
            {countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}
        </div>
    )
}

export default CountriesList