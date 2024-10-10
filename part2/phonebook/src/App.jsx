import { useState, useEffect } from 'react'
import axios from "axios";

import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import PersonList from "./components/PersonList.jsx";

const App = () => {
    const [persons, setPersons] = useState([])
    const [personsFilter, setPersonsFilter] = useState([])
    const [newFilter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                // response contains all the data from the HTTP GET request
                setPersons(response.data)
                setPersonsFilter(response.data)
            })
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter persons={persons}
                    setNewFilterPersons={setPersonsFilter}
                    newFilter={newFilter}
                    setNewFilter={setFilter}
            />

            <h2>Add a new</h2>

            <PersonForm persons={persons}
                        setPersons={setPersons}
                        setNewFilter={setFilter}
                        setNewPersonsFilter={setPersonsFilter}
            />

            <h2>Numbers</h2>

            <PersonList persons={personsFilter} />
        </div>
    )
}

export default App