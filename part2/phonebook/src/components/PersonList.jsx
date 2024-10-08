import Person from "./Person.jsx";

const PersonList = ({ persons }) => {
    return (
        <div>
            {persons.map(person => <Person key={person.name} person={person} />)}
        </div>
    )
}

export default PersonList