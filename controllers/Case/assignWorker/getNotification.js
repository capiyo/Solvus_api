import Case from '../../../models/case.js'

const getNotification = async (req, res) => {
    try {
        const newCase = await Case.findOne();;
       // .sort({_id:-1})
        res.status(200).json(newCase);
        console.log(newCase)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {getNotification};