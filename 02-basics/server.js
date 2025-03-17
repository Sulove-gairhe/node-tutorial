const http= require('http');
const server= http.createServer((req,res)=>{
    console.log(req);
})
;
server.listen(5000);
// The above code is a simple server creation code in node.js