const user = require('./user')



registerService=(data)=>{
    return user.create(data)
  
}
const loginSerice=(use,pass)=>{
    return user.findOne({
        email:use,password:pass
    })
 }

module.exports={registerService,loginSerice}