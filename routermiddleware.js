const express = require("express");
const router = express.Router();

const handleGetById = (req, res) => {
  console.log(`GET by id middleware`);
};

const handlePost = (req, res) => {
  console.log(`POST middleware`);
};

const handlePutById = (req, res) => {
  console.log(`PUT middleware`);
};

const handleDeleteById = (req, res) => {
  console.log(`DELETE middleware`);
};

router.get("/path/:id", handleGetById);
router.post("/path", handlePost);
router.put("/path/:id", handlePutById);
router.delete("/path/:id", handleDeleteById);

module.exports = router;
