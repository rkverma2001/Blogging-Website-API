const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const jwtSecretKey = process.env.JWT_SECRET;

const UserModel = require("../models/auth");

const signUp = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new UserModel({
      ...req.body,
      role: "USER",
      password: hash,
    });

    const newlyRegisteredUser = await newUser.save();
    res.json({
      message: "User registered successfully, Please sign in",
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found, Please register first",
      });
    }

    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    const tokenExpiry = Math.ceil(new Date().getTime() / 1_000) + 3600; // 1hr of validity
    const payload = {
      userId: user._id,
      name: user.name,
      exp: tokenExpiry,
    };

    const token = jwt.sign(payload, jwtSecretKey);
    if (isValidPassword) {
      return res.json({
        token,
      });
    }

    res.json({
      message: "Invalid password or username",
    });
  } catch (error) {
    console.log(error);
  }
};

const authController = {
  signUp,
  login,
};

module.exports = authController;
