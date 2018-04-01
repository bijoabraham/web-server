const express = require("express");

//Initialize server app
app = express();

//express middlewear to control express behaviour - here to serve static page from public folder
app.use(express.static(__dirname+'/public'))

//Code to handle req and response
app.get("/",(req,res)=>{
    res.send("Hello Word");
});

//start the server
app.listen(3000,()=>{
    console.log("Server is running");
});