import  Admins from '../../models/admins.js'
import uniqid from 'uniqid';

const addAdmin = async (req, res) => {
    const { jobId,adminId} = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const newAdmin = new Admins({
       jobId,adminId
      
    });

    try {   
        await newAdmin.save();
        //console.log(job)
        res.status(201).json(newAdmin);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
};

export {addAdmin};