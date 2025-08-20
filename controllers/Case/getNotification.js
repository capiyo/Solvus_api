import Case from "../../models/case.js";

const getNotification = async (req, res) => {
    try {
        const newcase = await Case.find({"posterId":req.params.userId,status:"Started"})
        console.log(newcase)
       // .sort({_id:-1})
        res.status(200).json(newcase);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {getNotification};