const express = require('express');
const router = express.Router();
router.use(express.json());
const { allCategory } = require('../controller/categoryController');

router.get('/', allCategory);

module.exports = router;
