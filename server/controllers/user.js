const User = require('../models/user');
const jwttoken = require('jsonwebtoken');
const getErrorMessage = require('../errorHandler/errorHandler');
const { expressjwt: jwt } = require("express-jwt");



const signup = async (req, res) => {
    const user = new User(req.body)
    // console.log(user);
    try {
        await user.save()
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (err) {
        console.log(typeof (errorHandler));
        return res.status(400).json({
            error: getErrorMessage(err)
        })
    }
}



const signin = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        console.log(req.body);
        if (!user)
            return res.status(401).json({
                error: "User not found"
            })

        if (!user.authenticate(req.body.password)) {
            return res.status(401).send({
                error: "Email and password don't match."
            })
        }

        const token = jwttoken.sign({
            _id: user._id
        }, process.env.JWT_SECRET)

        res.cookie("t", token, {
            expire: new Date() + 9999
        })

        return res.json({
            token,
            user: { _id: user._id, name: user.name, email: user.email }
        })
    } catch (err) {
        console.log(err)
        return res.status(401).json({
            error: "Could not sign in"
        })
    }
}

const signout = (req, res) => {
    res.clearCookie("t")
    return res.status(200).json({
        message: "signed out"
    })
}

const requireSignin = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'auth',
    algorithms: ["HS256"]
})

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!(authorized)) {
        return res.status(403).json({
            error: "User is not authorized"
        })
    }
    next()
}

module.exports = {
    signin,
    signout,
    signup,
    requireSignin,
    hasAuthorization
}
