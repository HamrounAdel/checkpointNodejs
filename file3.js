const fs =require("fs")
fs.writeFile("welcome.txt","Hello Node",err=>{
         if(err){console.log(err)}  else{
            console.log("created with success")
            const data = fs.readFileSync('welcome.txt', 'utf-8');
            console.log(data);
            
             
       } 
             
             
    })