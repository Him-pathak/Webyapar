const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


async function handleUserLogin(req,res) {
    const {userId, password} = req.body;

    if (!userId || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundUser = await User.findOne({userId}).exec();

    if (!foundUser) {
        return res.status(401).json({ message: 'User not found' })
    }

    const match = await bcrypt.compare(password, foundUser.password)

    if (!match) return res.status(401).json({ message: 'Wrong password' })

    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "userId": foundUser.userId,
                "role": foundUser.role
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '7d' }
    )

    res.json({ accessToken, userId, role : foundUser.role})

}

module.exports ={
    handleUserLogin,
}