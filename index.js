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

// if there is a post method from the browser
if(req.method.toLocaleLowerCase()=='post'){
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
        if(err){
            console.error(err.message);
            return;
        }
        res.writeHead(200,'OK',{'Content-Type':'text/plain'});
        res.write('The Post output response\n\n');
        // Take that data and parse it out and do whatever you like
        // Here we have placed the object from formidable in the res.end message
        res.end(util.inspect({fields:fields,files:files}))
    })
    // If the req is a get
}else if (req.method.toLowerCase()=='get'){
    res.writeHead(200,"OK", {"Content-Type":"text/plain"});
    res.write("The Get method response\n\n");
    // write out the url query to the res
    //  the data will be placed in url and we parse out the url query value 
    res.write(util.inspect(path.query)+"\n\n");
    res.end("end of Message to Browser");
}else{
// Something else
}

// let decoder = new StringDecoder('utf-8');
// let buffer = '';

// req.on('data', function(chunk){
//     buffer += decoder.write(chunk);
// })

// req.on('end', function(){
//     buffer += decoder.end();
//     res.writeHead(200,"OK", {"Content-Type":"text/plain"});
//     res.write("The Response\n\n");
//     res.write(util.inspect(path.query)+"\n\n");
//     res.write(buffer + "\n\n")
//     res.end("end of Message to Browser");
// })

})

server.listen(PORT,()=>{
    console.log("listening on port "+PORT)
})