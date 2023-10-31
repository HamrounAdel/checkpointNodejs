const fs =require("fs");
fs.writeFile("welcome.txt","Hello Node",err=>{
         (err)?console.log(err):console.log("created with success") 
    const data = fs.readFileSync('welcome.txt', 'utf-8');
    console.log(data);
             })