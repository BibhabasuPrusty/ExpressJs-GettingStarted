


const path=require('path');
const express=require('express');

const rootDir=require('../util/path');

const router=express.Router();

//  route /admin/add-product...
router.get('/add-product',(req,res,next)=>{
   // console.log('Midleware Logic2');
    //res.send('<form method="POST" action="/admin/add-product"><input type="text" name="title"><button type="submit">Add </button></form>')
    //res.sendFile(path.join(__dirname),'..','views','add-product.html');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
 });


 router.post('/add-product',(req,res,next)=>{
   console.log(req.body);
   res.redirect('/');
});


module.exports=router;