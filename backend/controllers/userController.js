import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc Auth User & get token
//@route POST /api/users/login
//@access Public

const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).send({ message: "Invalid Password or Email" });
  }
});

//@desc get user Profile
//@route get /api/users/profile
//@access Private

const getuserProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

//@desc Register a new User
//@route POST /api/users
//@access Public

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(400).send({ message: "Email Already Exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send({ message: "Invalid User Data" });
    }
  } catch (error) {
    res.send({ message: error.message });
  }
});

export { authUser, getuserProfile, registerUser };
