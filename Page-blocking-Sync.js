const http = require('http');
const server = http.createServer((req, res)=>{
   if(req.url === `/`){
    res.end(`HomePage`);
   } 
   else if(req.url === `/about`){
    for(let i = 0; i < 10000; i++){
        for(let j = 0; j < 10000; j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end(`AboutPage`);
   }
   else{
    res.end(`error Page`);
   }
})

server.listen(3000,()=>{
    console.log("Server is Listening on Port 3000");
})