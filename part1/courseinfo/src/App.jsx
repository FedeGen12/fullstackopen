const Header = (props) => {
    return (
        <h1>
            {props.course}
        </h1>
    )
}

const Content = (props) => {
    const part1 = <p> {props.parts[0].name} {props.parts[0].exercises} </p>
    const part2 = <p> {props.parts[1].name} {props.parts[1].exercises} </p>
    const part3 = <p> {props.parts[2].name} {props.parts[2].exercises} </p>


    return (
        <>
            {part1}
            {part2}
            {part3}
        </>
    )
}

const Total = (props) => {
    return (
        <p>
        Number of exercises {props.total}
        </p>
    )
}


const App = () => {

    const course = 'Half Stack application development'
    const parts = [
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

    return (
        <div>
            <Header course={course} />

            <Content parts={parts} />

            <Total parts={parts} />
        </div>
    )
}

export default App