const express=require("express");
const { userRegisterController ,userLoginController} = require("../controllers/auth.controller");
const router=express.Router();

//register route api/auth/register
router.post("/register",userRegisterController);

//login route api/auth/login
router.post("/login",userLoginController);
module.exports=router;