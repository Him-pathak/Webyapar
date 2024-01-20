const express = require('express');
const { handleUserSignup, verifyUser, updateUserDetails, getAllUsers, getTwoUsers, getUserById,resetUser } = require('../controllers/user');
const verifyJWT = require('../middlewares/verifyJwt');
const router = express.Router();

router.use(verifyJWT)

router.post('/', handleUserSignup)
    .get('/getOne', getUserById)
    .get('/getTwo', getTwoUsers)
    .get('/getAll', getAllUsers)
    .patch('/verify/:id', verifyUser)
    .patch('/reset/:id', resetUser)
    .patch('/updateDetails', updateUserDetails)

module.exports = router;