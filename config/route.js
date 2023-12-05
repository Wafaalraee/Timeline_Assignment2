const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.goHomePage);
router.post('/post', controllers.createPost);
router.post('/delete-user/:id', controllers.deleteUser);


module.exports = router;
