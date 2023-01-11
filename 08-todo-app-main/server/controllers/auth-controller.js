const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const updateTheme = async (req, res) => {
  const { email, theme } = req.body;

  const user = await User.findOneAndUpdate({ email }, { theme: !theme });
  console.log(user);
  // res.status(StatusCodes.OK).json({ user });
  res.send("theme");
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name, email: user.email }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Wrong email");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Wrong password");
  }

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    user: { name: user.name, email: user.email, theme: user.theme },
    token,
  });
};

module.exports = { login, register, updateTheme };
