const express = require('express');
const router = express.Router();
const StudentsProfileController = require('../controllers/StudentsProfileController');
const {createWork, deleteWork, updateWorkByStatus, findWorkByStatus} = require('../controllers/WorksController');
const AuthVerify = require('../middlewares/AuthVerifyMiddleware');

router.post('/registration', StudentsProfileController.registration);
router.post('/login', StudentsProfileController.login);
router.post('/profileUpdate', AuthVerify, StudentsProfileController.profileUpdate);
router.get('/profileDetails',AuthVerify, StudentsProfileController.profileDetails);
router.get('/RecoverVerifyEmail/:email', AuthVerify, StudentsProfileController.RecoverVerifyEmail);
router.get('/RecoverVerifyOTP/:email/:otp',AuthVerify, StudentsProfileController.RecoverVerifyOTP);
router.post('/RecoverResetPass',AuthVerify, StudentsProfileController.RecoverResetPass);

router.post('/createWork', AuthVerify, createWork);
router.post('/deleteWork', AuthVerify, deleteWork);
router.post('/UpdateWorkByStatus', AuthVerify, updateWorkByStatus);
router.get('/findWorkByStatus', AuthVerify, findWorkByStatus);

module.exports = router;

