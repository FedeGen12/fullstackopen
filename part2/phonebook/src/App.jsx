import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Miguel Merentiel',
          number: '15-1212-1212' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        let is_repeat = false;
        for (const person of persons) {
            if (person.name.toLowerCase() === newName.toLowerCase()) {
                is_repeat = true;
                break;
            }
        }

        if (is_repeat) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const person= {
                name: newName,
                number: newNumber
            }

            setPersons(persons.concat(person))
            setNewName('')
            setNewNumber('')
        }
    }

    const handlerInputChange = (event, setNewValue) => {
        // event is the input field ==> target.value = newName or newNumber
        setNewValue(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName}
                                 onChange={(event) => handlerInputChange(event, setNewName)} />
                </div>
                
                <div>
                    number: <input value={newNumber}
                                   onChange={(event) => handlerInputChange(event, setNewNumber)} />
                </div>
                
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
                <div>
                    {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
                </div>
        </div>
    )
}

export default App