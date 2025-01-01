import {useState} from "react";

const NoteForm = ({ createNote }) => {
    const [newNote, setNewNote] = useState('')

    const addNote = event => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
        }

        createNote(noteObject)
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    return (
        <form onSubmit={addNote}>
            <input
                value={newNote}
                onChange={handleNoteChange}
            />
            <button type="submit">save</button>
        </form>
    )
}

export default NoteForm