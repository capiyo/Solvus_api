import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    education:{
        type:String,
        required:true,

    },
    pSkill:{
        type:String,
        required:true

    },
    skills: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    wage: {
        type: String,
        required: true,
        default:"3:37:17 PM"
    },

    description:{
        type:String,
        required:true
    },






});

const profile = mongoose.model('Profiles', ProfileSchema);

export default profile;