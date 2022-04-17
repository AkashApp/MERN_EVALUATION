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
        const teachers= await Teacher.find().lean().exec();

        return res.status(200).send(teachers);
    } catch (error) {
        return res.status(500).send(err.message);
    }
})
module.exports= router;