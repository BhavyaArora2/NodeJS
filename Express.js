const express=require("express");
const http=require("http");
const hostname="localhost";
const port=3000;
const app=express();
const bodyParser=require("body-parser");
const dishRouter=require("./routes/dishRouter");
const morgan=require("morgan");

app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('This is an Express server');
});
app.use('/dishes', dishRouter);

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

const server=http.createServer(app);

server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}`)
});
