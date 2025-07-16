import ProfileSchema from '../../models/Profile.js'
import uniqid from 'uniqid';

const addProfile = async (req, res) => {
    const {userName,education,description,pSkill,skills,location,wage} = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const profile = new ProfileSchema({
      userName,education,description,pSkill,skills,location,wage,
    });

    try {
        await profile.save();

        res.status(201).json(profile);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
};

export {addProfile};