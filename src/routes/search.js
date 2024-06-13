const express = require('express');
const searchController = require('../app/controllers/SearchController');
const router = express.Router();
router.post('/', searchController.main);
router.get('/', searchController.index);
module.exports = router;
