const User = require('../models/user');
const jwttoken = require('jsonwebtoken');
const getErrorMessage = require('../errorHandler/errorHandler');
const { expressjwt: jwt } = require("express-jwt");



const register = async (req, res) => {

    try {
        const user = new User(req.body)
        const dbemail = await User.findOne({ email: req.body.email });
        if (dbemail) {
            throw new Error("Email Address already exists")
        }

        const dbmobile = await User.findOne({ mobile: req.body.mobile });
        if (dbmobile) {
            throw new Error('Mobile Number already exists');
        }
        await user.save()
        res.status(200).json({ message: "Successfully Registered!" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}



const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user)
            throw new Error('User not found');

        if (!user.authenticate(req.body.password)) {
            throw new Error('Email and password don\'t match');
        }

        const token = jwttoken.sign({
            _id: user._id
        }, process.env.JWT_SECRET)

        res.cookie("token", token, {
            expire: new Date() + 9999
        })

        return res.json({ token, user: { _id: user._id, username: user.username, email: user.email }, message: "Successfully logged in!" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const logout = (req, res) => {
    res.clearCookie("t")
    res.status(200).json({ message: "signed out" })
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
    login,
    logout,
    register,
    requireSignin,
    hasAuthorization
}
