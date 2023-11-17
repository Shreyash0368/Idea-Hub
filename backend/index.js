const connectToMongo = require('./db')
const express = require('express')
const auth = require('./Routes/auth')
const notes = require('./Routes/notes')

connectToMongo()
const app = express()
const port = 5000
app.use(express.json())

app.use('/auth', auth);
app.use('/notes', notes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})