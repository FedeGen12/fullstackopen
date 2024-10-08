const Filter = ({ persons, setNewFilterPersons, newFilter, setNewFilter }) => {

    const handlerFilterChange = (event) => {
        const currFilter = event.target.value
        setNewFilter(currFilter)

        // Check the currFilter without the spaces behind the word
        if (currFilter.trimStart().length === 0) {
            setNewFilterPersons(persons)    // shows the original persons list
            return true;
        }

        setNewFilterPersons(persons.filter(person => {
            const words = person.name.split(' ').map(word => word.toLowerCase())

            let matchesFilter = false
            words.forEach(word => word.startsWith(currFilter.toLowerCase()) ? matchesFilter = true : false)
            return matchesFilter
        }))
    }

    return (
        <div>
            filter shown with name or surname: <input value={newFilter}
                                                      onChange={handlerFilterChange} />
        </div>
    )
}

export default Filter