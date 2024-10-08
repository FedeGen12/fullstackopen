import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Miguel Merentiel',
          number: '15-1212-1212' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const [personsFilter, setNewPersonsFilter] = useState(persons)
    const [newFilter, setNewFilter] = useState('')

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

    const handlerFilterChange = (event) => {
        const currFilter = event.target.value
        setNewFilter(currFilter)

        // Check the currFilter without the spaces behind the word
        if (currFilter.trimStart().length === 0) {
            setNewPersonsFilter(persons)    // shows the original persons list
            return true;
        }

        setNewPersonsFilter(persons.filter(person => {
            const words = person.name.split(' ').map(word => word.toLowerCase())

            let is_filter = false
            words.forEach(word => word.startsWith(currFilter.toLowerCase()) ? is_filter = true : false)
            return is_filter
        }))
    }

    return (
        <div>
            <h2>Phonebook</h2>
                <div>
                    filter shown with name or surname: <input value={newFilter}
                                                              onChange={handlerFilterChange} />
                </div>

            <h2>Add a new</h2>
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
                    {personsFilter.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
                </div>
        </div>
    )
}

export default App