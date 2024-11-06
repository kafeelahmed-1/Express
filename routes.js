const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mw = require("./customMiddleware");

app.use(mw("adding new dynamic value"));

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("Initial middleware");
  next();
});

app
  .route("/update/:id")
  .all((req, res, next) => {
    console.log("Middleware for all HTTP methods on /update/:id");
    next();
  })
  .get(mw("Fetching dynamic data"))
  .put((req, res, next) => {
    console.log("PUT method middleware");
    next();
  })
  .delete((req, res, next) => {
    console.log("DELETE method middleware");
    next();
  });

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
