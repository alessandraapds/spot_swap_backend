const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return send.status(401)
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secret, (err, user) => {
        if(err) {
            return res.sendStatus(400)
        }
        req.user = user;
        next();
    })
};

module.exports = { verifyToken }