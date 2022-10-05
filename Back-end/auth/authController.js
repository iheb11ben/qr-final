const {registerService,loginSerice}=require('../auth/authService')
const {StatusCodes}=require('http-status-codes')


const login=async(req,res)=>{
const {email,password}=req.body
const User_Exist=await loginSerice(email,password)

if (!User_Exist){
    return res.status(StatusCodes.BAD_REQUEST).send('Wrong email or password ')
}
res.status(StatusCodes.OK).send({msg:'User loged in',User_Exist})
}
const register =async(req,res)=>{
    const {username,email,password}=req.body

    const Register=await registerService({username,email,password})
    res.status(StatusCodes.CREATED).send({ msg: 'User created',Register })
}
module.exports={login,register}