const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable")
const PORT = 3005

const server = http.createServer((req,res)=>{
// console.log(http.METHODS);
console.log(http.STATUS_CODES);  
    
})

server.listen(PORT,()=>{
    console.log("listening on port "+PORT)
})