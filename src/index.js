// const http = require("node:http");

// const hostName = 'localhost';
// const port = 5000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('Hello, World');
// })


// server.listen(port, hostName, ()=>{
//     console.log(`server running at http://${hostName}:${port}/`);
// })


const express = require('express');
const { default: mongoose } = require('mongoose');
const route = require('./routes/router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', true);

const URL = "mongodb+srv://nirmaljasval:8o1g7W6bqoshvXoN@cluster0.cv9nolo.mongodb.net/post";

mongoose.connect(URL, { useNewUrlParser: true })
    .then(() => { console.log('mongo connected') })
    .catch((err) => { console.log("ERROR: " + err.message) });

app.use('/', route);

app.listen(process.env.PORT || 3000, () => {
    console.log("server is running on: " + process.env.PORT || 3000);
});




