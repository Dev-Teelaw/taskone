const express  =require("express")
const fs =require ("fs")
const  http = require("http")
var app = express() 

app.get('/details.json',  (req, res)=> {
    fs.readFile( __dirname + "/" + "details.json", 'utf8', (err, data) =>{
       console.log( data );
       res.end( data );
    });
 })





const server= app.listen(3000,()=>{
console.log("reporting port 3000")
})