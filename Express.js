const express=require("express");
const http=require("http");
const hostname="localhost";
const port=3000;
const morgan=require("morgan");
const app=express();
const server=http.createServer(app);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('This is an Express server');
});


server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}`)
});
// const bodyParser=require("body-parser");
// const dishRouter=require("./routes/dishRouter");
// app.use(bodyParser.json());
// app.use('/dishes', dishRouter);
