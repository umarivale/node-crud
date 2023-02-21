const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({message:"welcome to crud"});
});
router.get('/user',userController.readUsers);
router.get('/user/:id',userController.readUser);
router.post('/user',userController.createUser);
router.put('/user/:id',userController.updateUser);
router.delete('/user/:id',userController.deleteUser);

module.exports = router;