const router = require('express').Router();

//controller
const categoryController = require('../controllers/categoryController');

router.get('/category',categoryController.viewCategory);
router.post('/category',categoryController.storeCategory);

module.exports = router;