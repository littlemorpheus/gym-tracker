const jwt = require("jsonwebtoken");

//verifyAuth instead of verifyToken so interchanagble 
module.exports.verifyAuth = (req, res, next) => {
    var token;
    if ('authorization' in req.headers) {
        token = req.headers['authorization'].split(' ')[1];
        console.log(token);
    }

    if (token) {
        jwt.verify(token, process.env.CLIENT_JWT_KEY, (err, decoded) => {
            if (err) {
                console.log(err)
                return res.status(403).send({auth: false, message: 'Token auth failed.'})
            }
            console.log(decoded)
            console.log("-----------------------------")
            req._id = decoded.user_id;
            next();
        });
    } else {
        return res.status(401).send({auth: false, message: 'No token provided.'});
    }
} 