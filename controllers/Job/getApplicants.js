import Applications from '../../models/Applicants.js'

const getApplicants = async (req, res) => {
 console.log("not baad")
    try {
        const applicants = await Applications.find();
       // .sort({_id:-1})
        res.status(200).json(applicants);
        console.log("gotten")
        console.log(applicants)
    } catch (error) {
     console.log("errrorr")
        res.status(404).json({ message: error.message });
    }
}

export {getApplicants};