import loginService from "../services/login.js";
import {useState} from "react";

const LoginForm = ({logUser, showMessage}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({ username, password, })

            window.localStorage.setItem(
                'loggedNoteappUser', JSON.stringify(user)
            )

            logUser(user)
            setUsername('')
            setPassword('')
        } catch {
            showMessage('Wrong credentials')
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
    )
}

export default LoginForm

