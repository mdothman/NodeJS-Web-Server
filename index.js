const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable")
const PORT = 3005

const server = http.createServer((req,res)=>{

})

server.listen(PORT,()=>{
    console.log("listening on port "+PORT)
})