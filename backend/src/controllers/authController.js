const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const signToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};




exports.register = async (req,res, next) => {
    try{
        const {name, email, password, role} = req.body;
        if (!name || !email || !password) return res.status(400).json({error: 'missing fields'})

        const exists = await User.findOne({email})
        if (exists) return res.status(409).json({error: 'email already exits'});

        const passwordHash = await bcrypt.hash(password, 12)
        const user = await User.create({name, email, passwordHash, role: role || 'customer'})
        const token = signToken(user)


        //send token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", //true only in https
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7days
        });

        res.status(201).json({
            user: {id: user._id, name: user.name, email: user.email, role: user.role},
            token
        });
    } catch (err) { next(err); }
};


exports.login = async (req,res, next) => {
    try{
      const {email, password} = req.body;
      if (!email || !password) return res.status(400).json({error: 'missing eail or password'});

      const user = await User.findOne({email})
      if (!user) return res.status(401).json({error: 'invalid credentials'});

      const ok = await bcrypt.compare(password, user.passwordHash)
      if (!ok) return res.status(401).json({error: 'invalid credentials'});

      const token = signToken(user);
      
      //send token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", //true only in https
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7days
        });

      res.json({
        user: { id: user._id, name: user.name, email: user.email, role: user.role},
        token
      });
    } catch (err) { next(err); }
};


exports.me = async (req, res) => {
    res.json({user: req.user})
}