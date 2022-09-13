const express = require('express');
const app = express();
app.get("/Ayisha",(req,res)=> {
    res.send("Hello Ayisha!");  // backend sends
}); 
app.listen(7000,()=>{
    console.log("Server is listening on port 7000")
});