const express= require('express');

const Teacher= require('../Models/TeacherModel');

const router= express.Router();

router.post("", async (req, res) => {
    try {
        const teacher= await Teacher.create(req.body);

        return res.status(201).send(teacher);
    } catch (error) {
        return res.status(500).send(err.message);
    }
});
router.get("", async function(req, res) {
    try {
        let teachers
        if(req.query.name){
            teachers= await Teacher.find({name:{$eq: req.query.name}}).lean().exec();
        }
        else if(req.query.gender){
            teachers= await Teacher.find({gender:{$eq: req.query.gender}}).lean().exec();
        }
        else{
            teachers= await Teacher.find().lean().exec();
        }

        return res.status(200).send(teachers);
    } catch (error) {
        return res.status(500).send(err.message);
    }
})
module.exports= router;