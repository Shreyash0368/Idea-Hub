const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

const auth = require('./Routes/auth')
const notes = require('./Routes/notes')

connectToMongo()
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())

app.use('/api/auth', auth);
app.use('/api/notes', notes);


app.listen(port, () => {
  console.log(`INote app listening on port ${port}`)
})