const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Session = require('../models/Sessions');
// User auth
const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.id).select('-password');

            if (!req.user) {
                return res.status(401).json({
                    message: "Not authorized"
                });
            }
            next();
        } catch (error) {
            return res.status(401).json({
                message: "Not authorized"
            });
        }
    } else {
        return res.status(401).json({
            message: "Not authorized"
        });
    }
};

// Check admin
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({
            message: "Admin access required"
        });
    }
};

const session = async(req,res,next) =>{
    const session = req.headers.authorization?.split(' ')[1];

    if (session) {
        try {
            const decode = jwt.verify(token, process.env.SESSION_KEY);
            req.user = await User.findById(decode.id).select('-password');

            if (!req.user) {
                return res.status(401).json({
                    message: "NO active session"
                });
            }

            if(req.activeUser == true){
                return res.status(401).json({
                    message: "Already Active session"
                });
            }
            next();
        } catch (error) {
            return res.status(401).json({
                message: "Already active session"
            });
        }
    } else {
        return res.status(401).json({
            message: "Not authorized"
        });
    }
}

module.exports = { protect, admin , session};