const mongoose = require('mongoose');
const mongURI = process.env.MONGO_URI;
console.log("-------------");
console.log(mongURI);
console.log("-------------");

const connectToMongo = async () => {
    await mongoose.connect(mongURI);
    console.log("connection established with Mongo");
}

module.exports = connectToMongo;