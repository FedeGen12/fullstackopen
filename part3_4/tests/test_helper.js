const Note = require('../models/note')
const User = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const initialNotes = [
    {
        content: 'HTML is easy',
        important: false
    },
    {
        content: 'Browser can execute only JavaScript',
        important: true
    }
]

const nonExistingId = async () => {
    const note = new Note({ content: 'willremovethissoon' })
    await note.save()
    await note.deleteOne()

    return note._id.toString()
}

const notesInDb = async () => {
    const notes = await Note.find({})
    return notes.map(note => note.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

const initializeUser = async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('BOCAAAAAAA', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
    return user;
}

const getTokenUser = (user) => {
    const userForToken = {
        username: user.username,
        id: user._id,
    }

    return jwt.sign(
        userForToken,
        process.env.SECRET,
        { expiresIn: 10 }  // expires in 10 seconds
    )
}

module.exports = {
    initialNotes,
    nonExistingId,
    notesInDb,
    usersInDb,
    initializeUser,
    getTokenUser
}