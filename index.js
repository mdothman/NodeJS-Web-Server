const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable")
const PORT = 3005

const server = http.createServer((req,res)=>{
// console.log(http.METHODS);
// console.log(http.STATUS_CODES); 
// console.log(req.headers)
// console.log(req.url)

let path = url.parse(req.url, true);
// The only values that will be retrieved in path are:
// path.pathname path.search path.query query string object

res.writeHead(200,"OK", {"Content-Type":"text/plain"});
res.write("The Response\n\n");
res.write(util.inspect(path.query)+"\n\n")
res.end("end of Message to Browser");


})

server.listen(PORT,()=>{
    console.log("listening on port "+PORT)
})