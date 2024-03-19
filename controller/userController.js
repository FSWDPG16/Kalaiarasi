const userDB=require("../model/usersSchema");
// post
const post1=
    async (req,res)=>{
    try{
      const {userName,Age,DOB,Location} = req.body;
      const moon = new userDB({userName,Age,DOB,Location});
      await moon.save()
      res.json({
  
        username: userName,
        Age: Age,
        DOB:DOB,
        Location:Location
        })
    }
    catch(error1){
      res.json({
        message:error1.message,
      })
    }
    
  }


// get

const get1=
    async (req,res)=>{
    try{
      const get=await userDB.findOne();
      // const {userName,Age,DOB,Location}=req.body;
      // const moon = new userDB({userName,Age,DOB,Location});
      // await moon.save()
      res.json({
        // userName:userName,
        // age:Age,
        // dob:DOB,
        // location:Location
        data:get,
      })
    }
    catch(error2){
      res.json({
        message:error2.message,
      })
    }
  }


//   put
const put1=
    async(req,res)=>{
    try{
      const {userName,Age,DOB,Location} = req.body;
      const objectId = req.params.body;
      const updateData = await userDB.findByIdAndUpdate(
        objectId,
        {userName,Age,DOB,Location},
        {new: true}
      )
    
    res.json({
      userName:userName,
      Age:Age,
      dob:DOB,
      Location:Location,
  
    })
  }
  catch (error){
    res.status(500).json({
      message:error.message,
    })
  }
  }


  //delete

const delete1=
    async(req,res)=>{
    try{
      const deleteDataObjectId = req.params.id;
      console.log("object id:",deleteDataObjectId)
      const deleteData = await userDB.findByIdAndDelete(deleteDataObjectId);
      res.json({
        data: deleteData,
        message: "Data delete successfully!",
      });
    }catch(error){
      res.status(500).json({
        message: error.message,
      });
    }
  }


const userProfile = async(req,res)=>{
  try{
    const userPic = req.file;
    res.json({
      profile : userPic
    })
  } catch(error){
    res.json({
      message : error.message,
    })
  }
}


module.exports={post1,get1,put1,delete1,userProfile};