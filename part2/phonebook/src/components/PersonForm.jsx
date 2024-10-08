import {useState} from "react";

const PersonForm = ({ persons, setPersons, setNewFilter, setNewPersonsFilter }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')


    const addPerson = (event) => {
        event.preventDefault()

        for (const person of persons) {
            if (person.name.toLowerCase() === newName.toLowerCase()) {
                alert(`${newName} is already added to phonebook`)
                return;
            }
        }

        const person= {
            name: newName,
            number: newNumber
        }

        const newPersons = persons.concat(person)
        setPersons(newPersons)
        setNewPersonsFilter(newPersons)

        // Restart states
        setNewFilter('')
        setNewName('')
        setNewNumber('')
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