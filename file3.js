const fs =require("fs")
fs.writeFile("welcome.txt","Hello Node",err=>{
         if(err){console.log(err)}  else{
            console.log("created with success")
  fs.readFile("welcome.txt",(err,file)=>{
                if(err){
                      console.log(err)
                  }else{
                      console.log(file)
                }
              })
            
             
       } 
             
             
    })