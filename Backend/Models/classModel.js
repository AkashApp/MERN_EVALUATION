const mongoose = require('mongoose');

const classSchema= new mongoose.Schema(
    {
        grade: {type: 'string', required: true},
        section: {type: 'string', required: true},
        subject: {type: 'string', required: true},
        teacher_id: {type: mongoose.Schema.Types.ObjectId, ref: "teacher", required: true}
    },
    {
        versionKey: false,
        timestamps:true
    }
);

module.exports= mongoose.model("class", classSchema);
