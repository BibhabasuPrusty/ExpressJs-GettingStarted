//const http = require('http');
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');


const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));


app.use('/admin',adminRoutes);
app.use(shopRoutes);

//const routes = require('./routes');

//console.log(routes.someText);
// const app=express();
// app.use((req,res,next)=>{
// console.log('Midleware Logic1');
// next();
// });
// app.use('/',(req,res,next)=>{
//     console.log('Midleware Logic1');
//     res.send('<h1>Hello from express </h1>')
//     next();
//  });


    


//const server = http.createServer(app);

//server.listen(3000);


app.use((req,res,next)=>
{
  res.status(404).sendFile(path.join(__dirname),'views','404.html');

});
app.listen(3000);
