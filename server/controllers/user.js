const User = require("../models/user");
const jwttoken = require("jsonwebtoken");
const { expressjwt: jwt } = require("express-jwt");
const Admin = require("../models/admin");

const register = async (req, res) => {


    try {
        const user = new User(req.body)

        
        const dbmobile = await User.findOne({ mobile: req.body.mobile });
        if (dbmobile) {
            throw new Error('Mobile Number already exists');
        }

        const dbemail = await User.findOne({ email: req.body.email });
        if (dbemail) {
            throw new Error("Email Address already exists")
        }

        await user.save()
        res.status(200).json({ message: "Successfully Registered!" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};



const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("User not found");

    if (!user.authenticate(req.body.password)) {
      throw new Error("Email and password don't match");
    }


    const token = jwttoken.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token, {
      maxAge: 86400000,
    });

    return res.json({
      token,
      user: { _id: user._id, username: user.username, email: user.email },
      message: "Successfully logged in!",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const adminLogin = async (req, res) => {
  try {
    let user = await Admin.findOne({ email: req.body.email });
    if (!user) throw new Error("User not found");

    if (!user.authenticate(req.body.password)) {
      throw new Error("Email and password don't match");
    }


    const token = jwttoken.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token, {
      maxAge: 86400000,
    });

    return res.json({
      token,
      user: { _id: user._id, username: user.username, email: user.email },
      message: "Successfully logged in!",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const logout = (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .status(200)
    .send({ message: "logged out!" });
};


const getUserDetails = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
}


const getUserDetails = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
}


const requireSignin = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
  algorithms: ["HS256"],
});

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status(403).json({ error: "User is not authorized" });
  }
  next();
};

module.exports = {
  login,
  logout,
  register,
  requireSignin,
  hasAuthorization,
  getUserDetails,
  adminLogin,
};

