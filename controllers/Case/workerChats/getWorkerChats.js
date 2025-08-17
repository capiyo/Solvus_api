import Chats from '../../../models/chats.js'

const getWorkerChats = async (req, res) => {
    try {
        const newchat = await WorkerModel.find()
       // .sort({_id:-1})
        res.status(200).json(newchat);
        console.log(newchat)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {getWorkerChats};