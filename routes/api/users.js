const express = require('express');
const router = express.Router();
const {
  validateAuth,
  validateUpdateSub,
  validateUploadAvatar,
} = require('../../helpers/validation');
const userController = require('../../controllers/users');
const guard = require('../../helpers/guard');
const upload = require('../../helpers/upload');

router.post('/auth/register', validateAuth, userController.register);
router.post('/auth/login', validateAuth, userController.login);
router.post('/auth/logout', guard, userController.logout);
router.get('/current', guard, userController.currentUser);
router.patch('/', guard, validateUpdateSub, userController.updateSub);
router.patch(
  '/avatars',
  [guard, upload.single('avatar'), validateUploadAvatar],
  userController.avatars,
);

router.get('/verify/:token', userController.verify);

module.exports = router;
