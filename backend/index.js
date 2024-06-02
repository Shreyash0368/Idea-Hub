const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../backend/.env') });
const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

const auth = require('./Routes/auth')
const notes = require('./Routes/notes')

connectToMongo()
const app = express()
const PORT = process.env.PORT ||5000
app.use(express.json())
app.use(cors())

app.use('/api/auth', auth);
app.use('/api/notes', notes);


app.listen(PORT, () => {
  console.log(`INote app listening on port ${PORT}`)
})