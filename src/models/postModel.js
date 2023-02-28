const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const postSchema = new mongoose.Schema({
    title:{type:String, required:true},
    content:{type:String, required:true},
    user:{type:ObjectId, ref:'usersCollection'}
},{timestamps:true});

module.exports = mongoose.model('postCollection', postSchema);