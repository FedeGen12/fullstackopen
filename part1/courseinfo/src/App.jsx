const Header = (props) => {
    return (
        <h1>
            {props.course.name}
        </h1>
    )
}

const Content = (props) => {
    const part1 = <p> {props.course.parts[0].name} {props.course.parts[0].exercises} </p>
    const part2 = <p> {props.course.parts[1].name} {props.course.parts[1].exercises} </p>
    const part3 = <p> {props.course.parts[2].name} {props.course.parts[2].exercises} </p>


    return (
        <>
            {part1}
            {part2}
            {part3}
        </>
    )
}

const Total = (props) => {
    let total = 0

    props.course.parts.forEach(part => {total += part.exercises})

    return (
        <p>
        Number of exercises {total}
        </p>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />

            <Content course={course} />

            <Total course={course} />
        </div>
    )
}

export default App