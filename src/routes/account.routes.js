const express=require('express');
const authMiddleware=require('../middleware/auth.middleware');
const accountController=require('../controllers/account.controller');
const router=express.Router();


//post /api/accounts
//create new account
router.post('/',authMiddleware.authMiddleware,accountController.createAccountController);

//-GET /api/accounts
//-get all accounts for logged-in user
router.get('/',authMiddleware.authMiddleware,accountController.getUserAccountsController);

//-GET api/accounts/balance/:accountId
//-get balanace of a particular id
router.get('/balance/:accountId',authMiddleware.authMiddleware,accountController.getAccountBalanceController);

module.exports=router;
