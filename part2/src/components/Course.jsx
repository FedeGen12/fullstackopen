const Header = ({ name }) => {
    return (
        <h1>
            {name}
        </h1>
    )
}

const Content = ({ parts }) => {
    const p_parts = parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p> )

    return (
        <div>
            {p_parts}
        </div>
    )
}

const Total = ({ parts }) => {
    let total = 0

    parts.forEach(part => total += part.exercises)

    return (
        <div>
            <b>total of {total} exercises</b>
        </div>
    )
}


const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course