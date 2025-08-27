import  Admins from '../../models/admins.js'
import User from '../../models/User.js';
import uniqid from 'uniqid';

const addAdmin = async (req, res) => {
 let randomIndex,randomItem,admin
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
          randomItem = allAdmin[randomIndex]

          admin= await Admins.findById(randomItem)
          console.log(admin)

// Get the item at the random index

//console.log(randomItem["adminId"]  )

        }

        else{
            console.log("not 3")
        }
       // .sort({_id:-1})
       // res.status(200).json(allAdmin);
        console.log(admin)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
        res.status(201).json(admin);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
};


 const getAllAdmins = async (req, res) => {

}








export {addAdmin};