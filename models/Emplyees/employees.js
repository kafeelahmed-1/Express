
const express = require('express');
const router = express.Router();

const handleGetById = (req, res) => {
    console.log(`GET by id middleware for Employees`);
};

const handlePost = (req, res) => {
    console.log(`POST middleware for Employees`);
};

const handlePutById = (req, res) => {
    console.log(`PUT middleware for Employees`);
};

const handleDeleteById = (req, res) => {
    console.log(`DELETE middleware for Employees`);
};

router.get('/employees', handleGetById);
router.post('/employees', handlePost);
router.put('/employeesupdate', handlePutById);
router.delete('/employeesdelete', handleDeleteById);

module.exports = router;
