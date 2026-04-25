const {Router} =require('express');

const authMiddleware=require('../middleware/auth.middleware');
const transactionController=require('../controllers/transaction.controller');

const transactionRoutes=Router();


//-post/api/transaction
//-create a new transaction
transactionRoutes.post('/',authMiddleware.authMiddleware,transactionController.createTransaction);

//-post/api/transactions/syste/initial-funds
//-create initial system funds fro system user
transactionRoutes.post('/system/initial-funds',authMiddleware.authSystemUserMiddleware,transactionController.createInitialFundsTransaction);

module.exports=transactionRoutes;