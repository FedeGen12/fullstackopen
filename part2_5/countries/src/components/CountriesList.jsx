import CountryEntry from "./CountryEntry.jsx";
import {useState} from "react";
import SingleCountryEntry from "./SingleCountryEntry.jsx";

const CountriesList = ({ countries, stateCountries, setStateCountries }) => {
    const [infoCountries, setInfoCountries] = useState({});

    if (countries == null) {
        return null;
    }

    if (countries.length === 1) {
        return (<SingleCountryEntry country={countries[0].data} />)
    }

    const handlerClickShow = (currCountry) => {
        const countryName = currCountry.data.name.common

        const countryObj = stateCountries[countryName]

        let newCountryObj = { ...currCountry, showed: !currCountry.showed };
        if (countryObj !== undefined) {
            newCountryObj = { ...countryObj, showed: !countryObj.showed };
        }

        const newCountriesToShow = { ...stateCountries };
        newCountriesToShow[countryName] = newCountryObj;
        setStateCountries(newCountriesToShow)

        const newInfoCountries = { ...infoCountries };
        if (newCountryObj.showed) {
            newInfoCountries[countryName] = <CountryEntry country={currCountry.data} />;
        } else {
            delete newInfoCountries[countryName];
        }
        setInfoCountries(newInfoCountries);
    };

    return (
        <div>
            {countries.map(country => {
                const countryName = country.data.name.common

                return (
                    <div key={countryName}>
                        <p className="countryName">{countryName}</p>

                        <button onClick={() => { handlerClickShow(country) }}>
                            {stateCountries[countryName].showed ? "unshow" : "show"}
                        </button>

                        {infoCountries[countryName]} {/* Render the React element */}
                    </div>
                )
            })}
        </div>
    );
};

export default CountriesList;