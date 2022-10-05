const{login,register}= require('../auth/authController')
  const userRouter = require('express').Router();
  
  userRouter.route('/login').post(login)

  userRouter.route('/register').post(register);
  
  module.exports = userRouter