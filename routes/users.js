const router = require('express').Router();
const { celebrate } = require('celebrate');
const { userUpdateValidation } = require('../utils/validationData');
const { getUserInfo, updateUserInfo } = require('../controllers/users');

router.get('/me', getUserInfo);
router.patch('/me', celebrate(userUpdateValidation), updateUserInfo);

module.exports = router;
