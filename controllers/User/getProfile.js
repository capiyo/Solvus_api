import ProfileModel from '../../models/Profile.js'

const getProfile = async (req, res) => {
    try {
        //const userId = req.params.id;
        const user = await ProfileModel.findOne();
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ message: "Failed to get user" });
    }
};

export {getProfile};