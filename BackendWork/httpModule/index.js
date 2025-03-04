const http=require('http');
const PORT=2527;
const server=http.createServer((req,res)=>{
    console.log("inside server body");
    res.setHeader('Content-Type',"text/html")
    res.write("<h2 style='color:cyan background-color:red'>Welcome to Node Server</h2>");
    res.end("<h2>Server has ended</h2>");
})
server.listen(PORT,()=>{
    console.log("Server is running on:"+PORT);
})