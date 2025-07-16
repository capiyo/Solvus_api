import WorkerModel from '../../models/workerModel.js'

const  firstChat= async (req, res) => {
    try {
        const chat = await WorkerModel.find().sort({_id:-1});
       // .sort({_id:-1})
        res.status(200).json(chat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {firstChat};