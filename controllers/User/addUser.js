import User from '../../models/User.js'
import uniqid from 'uniqid';

const addUser = async (req, res) => {
    console.log(req.body)
    try {
        const {userId,userName, phoneNumber,userEmail, userPassword, gender, address, userType } = req.body;
        
        const newUser = new User({
            userId:uniqid(),

            userName,
            userEmail,
            userPassword,
            gender,
            address,
            userType,
            phoneNumber,
        });
        newUser.userName = userName;
        newUser.userId = userId;
        newUser.phoneNumber=phoneNumber;
        newUser.userEmail = userEmail;
        newUser.userPassword = userPassword;
        newUser.gender = gender;
        newUser.address = address;
        newUser.userType = userType;

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {addUser};