
const express = require('express');
const router = express.Router();

const handleGetById = (req, res) => {
    console.log(`GET by id middleware for Admin`);
};

const handlePost = (req, res) => {
    console.log(`POST middleware for Admin`);
};

const handlePutById = (req, res) => {
    console.log(`PUT middleware for Admin`);
};

const handleDeleteById = (req, res) => {
    console.log(`DELETE middleware for Admin`);
};

router.get('/admin', handleGetById);
router.post('/admilogin', handlePost);
router.put('/adminupdate', handlePutById);
router.delete('/admindelete', handleDeleteById);

module.exports = router;
