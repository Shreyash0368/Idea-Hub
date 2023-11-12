const express = require('express');
const User = require('../Models/User');
const router = express.Router()


// middleware that is specific to this router

// define the home page route
router.post('/', (req, res) => {
    const user = User(req.body);
    user.save();
    res.send(req.body);
})
// define the about route


module.exports = router