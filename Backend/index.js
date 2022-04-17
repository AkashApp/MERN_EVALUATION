const express= require('express');
const connect= require('./config/config');

const app=express();
app.use(express.json());

app.listen(7492, async function(){
    try {
        await connect();
        console.log("listening on port 7492");
    } catch (error) {
        console.log("Something went wrong !");
    }
})