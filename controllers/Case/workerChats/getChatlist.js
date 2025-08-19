import Chatlist from '../../../models/chatlist.js'

const getChatlist = async (req, res) => {
    try {
        const newchat = await Chatlist.find()
       // .sort({_id:-1})
        res.status(200).json(newchat);
        console.log(newchat)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {getChatlist};