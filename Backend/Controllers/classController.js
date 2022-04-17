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