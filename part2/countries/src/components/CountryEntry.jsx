const CountryEntry = ({ country }) => {
    if (country == null) {
        return null
    }

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

export default CountryEntry