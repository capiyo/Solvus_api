import Case from '../../../models/Case.js'

const getNotification = async (req, res) => {
    try {
        const newcase = await Case.find()
       // .sort({_id:-1})
        res.status(200).json(newcase);
        console.log(newcase)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {getNotification};