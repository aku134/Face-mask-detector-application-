const express=require('express');

var app=express();

app.set('view engine','ejs')

app.use(express.static( '/public'));
app.listen(3000, function() { 
    console.log('server running on port 3000'); 
} ) 
  

app.get("/",function(req,res){
    res.render("main.ejs");
})
app.get("/name",function(req,res,err){
    if(err){
        res.redirect("/");
}

    facemask(req,res);
    res.end();

})

function facemask(req, res,next) { 
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["./detect_mask_video.py"] );
    process.stdout.on('data', function(data) { 
    res.send(data.toString('utf8'));
 } );
    
} 
