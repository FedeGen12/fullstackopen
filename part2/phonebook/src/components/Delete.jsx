import personService from '../services/persons.jsx'

const handlerDelete = (personToDelete, persons, setPersons, setPersonsFilter) => {
    const confirmedDeletion = window.confirm(`Delete ${personToDelete.name}?`)
    if (confirmedDeletion) {
        personService
            .deletePerson(personToDelete.id)
            .then(personDeleted => {
                const filteredPersons = persons.filter(person => person.id !== personDeleted.id)
                setPersons(filteredPersons)
                setPersonsFilter(filteredPersons)
            })
    }
}

export default {handlerDelete}