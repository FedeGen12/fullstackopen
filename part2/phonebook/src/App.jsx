import { useState, useEffect } from 'react'
import personService from './services/persons.jsx'
import personDelete from "./components/Delete.jsx";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import PersonList from "./components/PersonList.jsx";
import Notification from "./components/Notification.jsx";

const App = () => {
    const [persons, setPersons] = useState([])
    const [personsFilter, setPersonsFilter] = useState([])
    const [newFilter, setFilter] = useState('')
    const [message, setMessage] = useState(null)
    const [typeMessage, setTypeMessage] = useState("sucess")

    const hook = () => {
        personService
            .getAllPersons()
            .then(initalPersons => {
                setPersons(initalPersons)
                setPersonsFilter(initalPersons)
                return initalPersons
            })
    }

    useEffect(hook, []);

    return (
        <div>
            <h2>Phonebook</h2>

            <Notification message={message}
                          typeMessage={typeMessage.concat(" message")}
            />

            <Filter persons={persons}
                    setNewFilterPersons={setPersonsFilter}
                    newFilter={newFilter}
                    setNewFilter={setFilter}
            />

            <h2>Add a new</h2>

            <PersonForm persons={persons}
                        setPersons={setPersons}
                        setNewFilter={setFilter}
                        setPersonsFilter={setPersonsFilter}
                        setMessage={setMessage}
                        setTypeMessage={setTypeMessage}
                        reloadList={hook}
            />

            <h2>Numbers</h2>

            <PersonList persons={personsFilter}
                        handlerDelete={(personToDelete) => (
                            personDelete.handlerDelete(personToDelete,
                                persons, setPersons, setPersonsFilter, hook)
                        )}
            />
        </div>
    )
}

export default App