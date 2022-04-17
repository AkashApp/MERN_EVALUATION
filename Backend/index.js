const express= require('express');
const connect= require('./config/config');

const adminController = require('./Controllers/adminController');
const classController = require('./Controllers/classController');
const teacherController = require('./Controllers/teacherController');

const app=express();
app.use(express.json());

app.use("/admin", adminController);
app.use("/class", classController);
app.use("/teacher", teacherController);

app.listen(7492, async function(){
    try {
        await connect();
        console.log("listening on port 7492");
    } catch (error) {
        console.log("Something went wrong !");
    }
})