import { useState } from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import PersonList from "./components/PersonList.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Miguel Merentiel',
          number: '15-1212-1212' }
    ])

    const [personsFilter, setNewPersonsFilter] = useState(persons)
    const [newFilter, setNewFilter] = useState('')

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter persons={persons}
                    setNewFilterPersons={setNewPersonsFilter}
                    newFilter={newFilter}
                    setNewFilter={setNewFilter}
            />

            <h2>Add a new</h2>

            <PersonForm persons={persons}
                        setPersons={setPersons}
                        setNewFilter={setNewFilter}
                        setNewPersonsFilter={setNewPersonsFilter}
            />

            <h2>Numbers</h2>

            <PersonList persons={personsFilter} />
        </div>
    )
}

export default App