const { Login } = require('../services/userService');
const jwt = require('jsonwebtoken');

exports.userLogin = async (req, res, next) => {
    try {
        const user = await Login(req.body)
        const token = jwt.sign({userId : user.id}, process.env.TOKEN_SECRET);
        
        res.json({
            status_message: 'Logged in Successfully',
            status_code: 1,
            token : token,
            user: user
        });
    } catch (err) {
      console.error(`Error while login `, err.message);
      next(err);
    }
}