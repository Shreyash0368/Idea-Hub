const mongoose = require('mongoose');
const mongURI = "mongodb://127.0.0.1:27017/i-note"

const connectToMongo = async () => {
    await mongoose.connect(mongURI);
    console.log("connection established with Mongo");
}

module.exports = connectToMongo;