const express = require('express');
const router = express.Router();
const {registerUser, logIn} = require('../controller/userController');
const postController = require('../controller/postController');

router.get('/testme', (req,res)=>{
    res.send("all fine");
});

router.post('/post/register', registerUser);
router.post('/post/login', logIn);


module.exports = router;