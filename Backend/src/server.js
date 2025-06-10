const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Route = require("./routes/route")

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
