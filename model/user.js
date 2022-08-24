const Constant = require("../constant/Constant");
const db = require('../config/db');
const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        name:String,
        email:{type:String,required:[true,"email is required"],unique:[true,"email already registerd !!"]},
        password:{type:String,required:[true,"email is required"],minLength:[5,"min 5 character required"]},
        phone:{type:Number}

    }
)

//module.exports = mongoose.model("auth_signup",User);
const User = mongoose.model("auth_signup",user);

module.exports = {
    signup:async (data)=>{
        let response = {};
        let result = null;
        let user = null;
      try{
        user = new User(data);
        result = await user.save();
        console.log(result);
        if(result)
        {
            response.status = 'success';
            response.data = result;
        }
        else{
            response.status = 'failed';
        }
        console.log(response);
   }
    catch(err)
    {
        response.status = "failed"
        response.message = err;
    }
        return response;
    }
}