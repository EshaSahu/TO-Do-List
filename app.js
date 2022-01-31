const express= require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
var items=["cook food", "eat food"];
var workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
   
var day=date.getDate();
    
    res.render("list", {listTitle: day, newlistItems: items});
    });

app.post("/", function(req, res){
    var item=req.body.newItem;
    if(req.body.list==="work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});
app.get("/work", function(req, res){
    res.render("list", {listTitle: "work", newlistItems: workItems});
});
app.get("/about", function(req, res){
    res.render("about");
});
app.listen(8000, function(){
    console.log("Server running at port 8000");
});
