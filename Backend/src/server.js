const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");

const app = express();

app.use(express.json());
app.use("/", route);

mongoose
  .connect(
    "mongodb+srv://sumitcoc2nd:ltZ9asX4BPe9Rori@cluster0.wfi8x42.mongodb.net/E-Commerce"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("DB Connection Failed"));

app.listen(4000, (err) => {
  err
    ? console.log("Server Not Connected")
    : console.log("Server is Running at port 4000");
});
//middleware
// const middleware=(req,res,next)=>{
//     console.log("This is Middleware 1");
//     let randomNo=Math.floor(Math.random()*10);
//     if(randomNo<3){
//         res.json({msg:"This id Middleware1"});
//         console.log(randomNo);
//     }else{
//         console.log(randomNo);
//         next();
//     }
// }
// const middleware2=(req,res,next)=>{
//     console.log("This is Middleware 2");
//     let randomNo2=Math.floor(Math.random()*20);
//     if(randomNo2<6){
//         res.json({msg:"This id Middleware2"});
//         console.log(randomNo2);
//     }else{
//         console.log(randomNo2);
//         next();
//     }
// }
// app.use(middleware);
// app.use(middleware2);