import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Miguel Merentiel' }
    ])
    const [newName, setNewName] = useState('')

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
                name: newName
            }

            setPersons(persons.concat(person))
            setNewName('')
        }



    }

    const handlerNameChange = (event) => {
        // event is the input field ==> target.value = newName
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName}
                                 onChange={handlerNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
                <div>
                    {persons.map(person => <p key={person.name}>{person.name}</p>)}
                </div>
        </div>
    )
}

export default App