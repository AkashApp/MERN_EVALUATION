const express= require('express');

const Class= require('../Models/classModel');

const router= express.Router();

router.post("/", async (req, res) => {
    try {
        const getclass= await Class.create(req.body);

        return res.status(201).send(getclass);
    } catch (error) {
        return res.status(500).send(err.message);
    }
});
router.get("/", async function(req, res) {
    try {
        let getclasses;
        if(req.query.teacher_id){
            getclasses= await Class.find({teacher_id: {$eq: req.query.teacher_id}}).populate({path:"teacher_id"}).lean().exec();
        }else{
            getclasses= await Class.find().populate({path:"teacher_id"}).lean().exec();
        }
        
        return res.status(200).send(getclasses);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

module.exports = router;