const express = require("express");
const userModel = require("../model/user");
const router = express.Router();

router.post("/signup",async (request,response)=>{
   const data = request.body;
   response.json(await userModel.signup(data));
})
// router.post("/login",async (request,response)=>{
//     const data = request.body;
//     const  result = await user.login(data);
//     response.json(result)
//  })
 

module.exports = router;