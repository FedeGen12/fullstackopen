import {useState, useEffect, useRef} from 'react'
import Note from './components/Note'
import Notification from './components/Notification.jsx'
import noteService from './services/notes.js'
import LoginForm from "./components/LoginForm.jsx";
import NoteForm from "./components/NoteForm.jsx";
import Togglable from "./components/Togglable.jsx";

const App = () => {
    const [notes, setNotes] = useState([])
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [user, setUser] = useState(null)

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

    const noteFormRef = useRef()

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

    const addNote = (newNote) => {
        noteFormRef.current.toggleVisibility()
        noteService
            .create(newNote)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
            })
    }

    const logUser = (user) => {
        noteService.setToken(user.token)
        setUser(user)
    }

    const showErrorMessage = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    }

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} className='error'/>

            {user === null ?
                <Togglable buttonLabel='login'>
                    <LoginForm
                        logUser={logUser}
                        showMessage={showErrorMessage}
                    />
                </Togglable> :
                <div>
                    <p>{user.name} logged-in</p>
                    <Togglable buttonLabel='new note' ref={noteFormRef}>
                        <NoteForm createNote={addNote} />
                    </Togglable>
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