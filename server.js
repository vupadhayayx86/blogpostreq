const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  console.log(req.method)
  res.end('Hello Server');
  if(req.method=="POST"){
    console.log("post request received")
    let data=""
    req.on("data",(chunk)=>{
        data+=chunk.toString()
    })
    console.log(data)
        req.on("end",()=>{
        try{
            const blog=JSON.parse(data)
            console.log(blog)
            res.statusCode=200;
            res.end("Data Received Successfully")
        }catch(err){
            res.end("Something went wrong")
        }
    })
  } else {
    res.statusCode=404
    res.end()

  }


});

server.listen(3001, () => console.log('Server started on port 3000'));
