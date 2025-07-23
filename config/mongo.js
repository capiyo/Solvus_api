import  mongoose   from 'mongoose';
const  mongoPath =  'mongodb://localhost:27017/mpesatransactions';

 const mpesaTransactionDBConnector = async() => {
    await mongoose.connect(mongoPath);
    return mongoose;
}

export default mpesaTransactionDBConnector
