const mongoose = require('mongoose');
const mongURI = "mongodb://127.0.0.1:27017/i-note"

const connectToMongo = async () => {
    let data = await mongoose.connect(mongURI)
    console.log("connection established with Mongo");
}



// console.log('connected');

module.exports = connectToMongo;