// const https = require('node:https');
// const server = https.createServer((req, res) => {
//   console.log(req.method)
//  // res.end('Hello Server');
//   if(req.method=="POST"){
//    // res.end("Data Received Successfully")
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     console.log("post request received")
//     let data=""
//     req.on("data",(chunk)=>{
//         data+=chunk.toString()
//     })
//     console.log(data)
//         req.on("end",()=>{
//         try{
//             const blog=data
//             console.log(blog + "blog")
//             res.statusCode=200;
//         }catch(err){
//             res.statusCode=400
//             res.end({error:"something went wrong"})
//         }
//     })
//   } else {
//     res.statusCode=404
//     res.end()

//   } 
// });

// server.listen(3001, () => console.log('Server started on port 3000'));

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method)
  if (req.method === 'POST' && req.url === '/') {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      const parsedData = JSON.parse(data);

      // Display the sent values
      console.log('Data:', parsedData);

      // Send a response back
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Data received successfully!' }));
    });
  } else {
    // Handle invalid routes
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
