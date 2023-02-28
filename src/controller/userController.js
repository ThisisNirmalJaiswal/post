const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        let data = req.body;
        const { name, username, email, password } = data;

        const userCreated = await userModel.create(data);
        return res.status(201).send({ status: true, data: userCreated });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

const logIn = async (req, res) => {
    try {
        let data = req.body;
        const { email, password } = data
        const user = await userModel.findOne({ email: email, password: password });


        let token = jwt.sign(
            {
                userId: user._id.toString()
            },
            "veryverysecret"   //Secrete key
        );

        return res.status(200).send({ status: false, message: "Logged in successfully", token: token, userDetails: user })
    } catch (err) {
        return res.status(500).send({ status: false, Error: err.message });
    }
}

module.exports = { registerUser, logIn };