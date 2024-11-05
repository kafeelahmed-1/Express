const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const HandleGet = (req, res, next) => {
    console.log("Middleware executed");
    next();
};

app.use((req, res, next) => {
    console.log("First middleware");
    next();
});

app.use((req, res, next) => {
    console.log("This is second middleware");
    next();
});

app.get('/', (req, res, next) => {
    console.log("get response");
    next();
}, HandleGet);

app.get('/final', (req, res, next) => {
    console.log("Final Middleware");
    res.send("Final Middleware");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
