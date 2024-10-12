import {useState} from "react";
import personService from '../services/persons.jsx'

const PersonForm = ({ persons, setPersons, setNewFilter, setPersonsFilter }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        const newPerson= {
            name: newName,
            number: newNumber
        }

        for (const person of persons) {
            if (person.name.toLowerCase() === newName.toLowerCase()) {
                const confimedUpdated = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
                if (confimedUpdated) {
                    personService
                        .updatePhonePerson({...newPerson, id:person.id})
                        .then((personUpdated) => {
                            const personsUpdated = persons.map(person => person.id !== personUpdated.id ? person : personUpdated)
                            setPersons(personsUpdated)
                            setPersonsFilter(personsUpdated)

                            // Restart states
                            setNewFilter('')
                            setNewName('')
                            setNewNumber('')
                        })
                }
                return
            }
        }

        personService
            .createPerson(newPerson)
            .then(createdPerson => {
                const newPersons = persons.concat(createdPerson)
                setPersons(newPersons)
                setPersonsFilter(newPersons)

                // Restart states
                setNewFilter('')
                setNewName('')
                setNewNumber('')
            })
    }


    const handlerInputChange = (event, setNewValue) => {
        // event is the input field ==> target.value = newName or newNumber
        setNewValue(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName}
                             onChange={(event) => handlerInputChange(event, setNewName)}
                             required />
            </div>

            <div>
                number: <input value={newNumber}
                               onChange={(event) => handlerInputChange(event, setNewNumber)}
                               required />
            </div>

            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm