const express= require('express');

const Admin= require('../Models/AdminModel');

const router = express.Router();

router.post("", async function(req, res){
    try {
        const admin= await Admin.create(req.body);

        return res.status(201).send(admin);
    } catch (error) {
        return res.status(500).send(err.message);
    }
});

router.get("", async function(req, res) {
    try {
        let admin;
        if(req.query.username){
            admin= await Admin.find({username:{$eq:req.query.username}}).lean().exec();
        }else{
            admin= await Admin.find().lean().exec();
        }

        return res.status(200).send(admin);
    } catch (error) {
        return res.status(500).send(err.message);
    }
});


module.exports= router;