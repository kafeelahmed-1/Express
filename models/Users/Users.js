const express = require("express");
const router = express.Router();

const handleGetById = (req, res) => {
  console.log(`GET by id middleware for Users`);
};

const handlePost = (req, res) => {
  console.log(`POST middleware for Users`);
};

const handlePutById = (req, res) => {
  console.log(`PUT middleware for Users`);
};

const handleDeleteById = (req, res) => {
  console.log(`DELETE middleware for Users`);
};

router.get("/users", handleGetById);
router.post("/users", handlePost);
router.put("/usersupdate", handlePutById);
router.delete("/usersdelete", handleDeleteById);

module.exports = router;
