const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Route = require("./routes/route")


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


app.use(express.json());
app.use("/", Route)
mongoose.connect("mongodb+srv://snehatomar92003:14434918w@cluster0.42hcgok.mongodb.net/Shopping-Cart")
    .then(() => console.log("DB Connected"))
    .catch(() => console.log("DB not Connected"))

// create server
app.get("/", (req, res) => {
    res.send("Hello")
})


// create path
app.listen(2000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running at 2000");
    }
})
