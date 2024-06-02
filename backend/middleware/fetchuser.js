const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;


const fetchuser = (req, res, next) => {
    // decoding id from authToken in req header
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({success: false, error: "Enter a valid authorization token!"});
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({success: false, error: "Enter a valid authorization token!"});
        }

        const userid = decoded.user.id;
        req.userid = userid;
        next();
    })


}

module.exports = fetchuser