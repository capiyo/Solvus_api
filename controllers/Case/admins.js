import  Admins from '../../models/admins.js'
import uniqid from 'uniqid';

const addAdmin = async (req, res) => {
 let randomIndex,randomItem
    const { jobId,adminId} = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const newAdmin = new Admins({
       jobId,adminId
      
    });

    try {   
     
        await newAdmin.save();
        //console.log(job)
            try {
        const allAdmin = await Admins.find()
        if(allAdmin.length>3){
          randomIndex = Math.floor(Math.random() * allAdmin.length);

// Get the item at the random index
randomItem = allAdmin[randomIndex]
console.log(randomItem["adminId"]  )

        }
       // .sort({_id:-1})
       // res.status(200).json(allAdmin);
        console.log(allAdmin.length)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
        res.status(201).json(randomItem);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
};


 const getAllAdmins = async (req, res) => {

}








export {addAdmin};