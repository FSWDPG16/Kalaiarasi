const express = require('express');
const route = express.Router();
const multer = require('multer');
route.use(express.json());
const {post1,get1,put1,delete1, userProfile}=require("../controller/userController")
// const userDB=require("../model/usersSchema");

const storage = multer.diskStorage({
    destination : './public/userProfile',
    filename : function(req,file,cb){
        cb(null,file.originalname)
    }
});

const upload = multer({storage : storage});
const singUpload = upload.any('profilepic')

route.post("/post", post1 )
  
route.get("/get", get1)
  
route.put("/edit/:id", put1 )
  
route.delete("/delete/:id", delete1);

// route.userProf("/profile",userProfile)

route.post('/profile', singUpload, userProfile)

module.exports=route;