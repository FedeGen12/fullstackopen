import { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification.jsx'
import noteService from './services/notes.js'
import LoginForm from "./components/LoginForm.jsx";
import NoteForm from "./components/NoteForm.jsx";

const App = () => {
    const [notes, setNotes] = useState([])
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [user, setUser] = useState(null)
    const [loginVisible, setLoginVisible] = useState(false)

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
    }, [])

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
            })

            .catch(() => {
                setErrorMessage(
                    `Note '${note.content}' was already removed from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
    }

    const loginForm = () => {
        const hide = { display: loginVisible ? 'none' : '' }
        const show = { display: loginVisible ? '' : 'none' }

        return (
            <div>
                <div style={hide}>
                    <button onClick={() => setLoginVisible(true)}>log in</button>
                </div>
                <div style={show}>
                    <LoginForm
                        setUser={setUser}
                        setErrorMessage={setErrorMessage}
                    />
                    <button onClick={() => setLoginVisible(false)}>cancel</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} className='error'/>

            {user === null ?
                loginForm() :
                <div>
                    <p>{user.name} logged-in</p>
                    {<NoteForm notes={notes} setNotes={setNotes} />}
                </div>
            }

            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
        </div>
    )
}

export default App