const express = require("express");

//handle bar for templating 
const hbs = require("hbs") ;

//Initialize server app
app = express();

//set handle bar hbs as view engine
app.set("view engine","hbs");

//express middlewear to control express behaviour - here to serve static page from public folder
app.use(express.static(__dirname+'/public'))

//Code to handle req and response
app.get("/",(req,res)=>{
    res.send("Hello Word");
});

//render tempalte on request
//passing data to template
app.get("/about",(req,res)=>{
    //the tempalte is always searched in the views folder
    res.render("about",{content:"dynamic data on a template render"});
});

//start the server
app.listen(3000,()=>{
    console.log("Server is running");
});