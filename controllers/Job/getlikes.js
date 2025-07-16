import Likes from '../../models/likes.js'

const getLikes = async (req, res) => {
     try {
        const jobId = req.params.jobId;
            const likes = await Likes.findById(jobId);
            console.log(jobId)
        if (!likes) {
            return res.status(404).json({ message: 'Likes not found' });
        }
        res.status(200).json(likes);
    } catch (error) {
      console.log(error)
        res.status(500).json({ message: 'Server error' });
    }
}

export {getLikes};