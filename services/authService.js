const jwt = require('jsonwebtoken');

// Authorize user
exports.authToken = function(req, res, next){
    // Gather the jwt access token from the request header

    // const token = req.header('token');
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.status(401).send(
        {status_message : 'Access Denied'}
    );
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send({status_message : 'Invalid or expired token provided.', status_code: 2})
    }
}