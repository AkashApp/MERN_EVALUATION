const mongoose= require('mongoose');

const connect= () =>{
    return mongoose.connect("mongodb+srv://AkashBorate:Akash_7492@cluster0.m8iwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

module.exports= connect;