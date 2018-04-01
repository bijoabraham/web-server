const express = require("express");

//handle bar for templating 
const hbs = require("hbs") ;

//Initialize server app
app = express();

//partial page renderting inn hbs by specifying partial page dir
hbs.registerPartials(__dirname+'\\views\\partials')

//register handlers in handlebar
hbs.registerHelper("getYear",()=>{
    return new Date().getFullYear();
});

//set handle bar hbs as view engine
app.set("view engine","hbs");

//express middlewear to control express behaviour - here to serve static page from public folder
app.use(express.static(__dirname+'/public'))

//middleware to intercept req and response
//the request is allowed to process only when next() is called
app.use((req,res,next)=>{
    console.log(`Request :${req.method}, Url:${req.url}`);
    //if next is not called the server request is hanged
    next();    
});

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