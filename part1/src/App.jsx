const Hello = (props) => {

    console.log(props)
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}

const App = () => {

    const name = 'Pipa'
    const age = 9

    return (
        <div>
            <h1>Greetings</h1>

            <Hello name='Merentiel' age={6 + 1} />
            <Hello name={name} age={age} />
        </div>
    )
}

export default App