const mongoose= require('mongoose');

const adminSchema= new mongoose.Schema({
    adminname: {type: String, required: true},
    password: {type: String, required: true}
},{
    versionKey:false,
    timestamps:true
});

module.exports= new mongoose.model("Admin", adminSchema);