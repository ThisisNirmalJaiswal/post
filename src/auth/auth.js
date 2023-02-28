const jwt = require('jsonwebtoken');
const postModel = require('../models/postModel');

const authenctication = async (req, res, next) => {
    try {
        let token = req.headers['x-api-key'];
        if (!token) token = req.headers['X-API-KEY'];
        if (!token) {
            return res.status(401).send({ status: false, Error: "Unauthorised" })
        }

        let decodedToken = jwt.verify(token, "veryverysecret")
        req.loggedInUserId = decodedToken.userId
        next()

    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
}

const authorization = async (req, res, next) => {
    try {
        let postId = req.params.postId;
        let post = await postModel.findById({ _id: postId });
        if (!post) {
            if (blog.userId != req.loggedInUserId) {
                return res.status(403).send({ status: false, Error: "unauthorise user" });
            } else {
                next()
            }
        } else {
            return res.status(404).send({ status: false, Error: "post does not found!!" })
        }
    } catch (err) {
        return res.status(500).send({ status: false, Error: data })
    }
}


module.exports = { authenctication, authorization }