const User = require('../models/user');
const jwttoken = require('jsonwebtoken');



const signup = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(200).json({ message: "Successfully signed up!" })
    } catch (err) {
        res.send({ message: err.message });
    }
}



const signin = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        // console.log(req.body);
        if (!user) {
            throw new Error('User not found')
        }

        if (!user.authenticate(req.body.password)) {
            throw new Error('Email or Password don\'t match');
        }

        const token = jwttoken.sign({
            _id: user._id
        }, process.env.JWT_SECRET)

        res.cookie("token", token, {
            maxAge: 86400000
        })

        return res.json({ token, user: { _id: user._id, name: user.name, email: user.email } })
    } catch (err) {
        res.send({ message: err.message })
    }
}

const signout = (req, res) => {
    res.clearCookie("token")
    res.status(200).json({ message: "signed out" })
}

module.exports = {
    signin,
    signout,
    signup,
}
