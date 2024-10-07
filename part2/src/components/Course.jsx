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
    const total = parts.reduce((acc, curr_part) => acc + curr_part.exercises, 0)    // 0 is the initial value for acc

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