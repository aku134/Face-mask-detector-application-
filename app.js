const express=require('express');
const { endianness } = require('os');
const { mainModule } = require('process');
const { runInContext } = require('vm');
var app=express();

app.set('view engine','ejs')

app.use(express.static( '/public'));
app.listen(3000, function() { 
    console.log('server running on port 3000'); 
} ) 
  
// Function callName() is executed whenever  
// url is of the form localhost:3000/name 
app.get("/",function(req,res){
    res.render("main.ejs");
})
app.get("/name",function(req,res){
    facemask();
    
})
app.post("/name",function(req,res){
    end();
    
})
 
function facemask(req, res) { 
    
      
    // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
   
    var process = spawn('python',["./detect_mask_video.py"] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        h.innercontent=data.toString('utf8');
    } );
} 
function end(req, res) { 
    
      
    // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
   
    var process = spawn('python',["./run.py"] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        h.innercontent=data.toString('utf8');
    } );
} 
