const express = require('express');
const connectionlink = require("./common/Connection");
require('dotenv').config();
const app = express();
app.use(express.json());
const PORT =process.env.PORT||4000;

const route=require("./routes/userRoute")

connectionlink();

app.use(route);




// app.post("/po", async (req, res) => {
//     try {
//       const { username } = req.body;
  
      
//       res.json({
//         message: ` user name - ${username}`,
//       });
//     } catch (error) {
//       res.json({
//         error: error.message,
//       });
//     }
//   });


// app.get("/kalai", (req, res) => {
//     res.send("kalai")
// })

// app.post("/sample", (req, res) => {
//     const { name } = req.body;
//     res.json({
//         data: name
//     })
// })

// app.post("/sample", (req, res) => {
//     try {
//         const { name } = req.body;
//         if(!name){
//             res.json({
//                 message : `Enter your name`
//             })
//         }
    
//         res.json({
//             data: name,
//             status: 200,
//             error: false,
//             message: `data received successfully`
//         })
//     }
//     catch (error) {
//         res.json({
//             message: `Error=${error}`
//         })
//     }
// })

// const data = [
//     {
//         "name": "kalai",
//         "age": "22",
//         "location": "chennai"
//     }
// ]
// app.get("/datalist", (req, res) => {
//     res.send(data)
// })

// app.get("/datalist", (req, res) => {
//     try{
//     res.send(data)
//     }
//     catch(error){
//         res.send(`data not received`)
//     }
// })

// app.use("/king", (req, res) => {
//     res.send("response send")
// })


app.listen(PORT, () => {
    console.log("Hello Everyone", PORT);
})