//Each route has a function that takes two parameters
//data:the info about the request
//callback:the function to call to send the response
const routes = {
    "kenny":(data,res)=>{
        let payload ={
            name:"Kenny"
        };
        let payloadStr = JSON.stringify(payload);
        res.setHeader("Content-Type","application/json");
        res.setHeader("Access-Control-Allow-Origin","*");
        res.writeHead(200);
        res.write(payloadStr);
        res.end("\n");
    },
    "cartman":(data,res)=>{

    },
    "kenny/is/mysterion":(data,res)=>{

    },
    "notFound": (data,res)=>{

    }
}