import  mongoose from 'mongoose';

const mpesaTransactionsSchema = mongoose.Schema({
    payingPhoneNumber: String,
    transationDate: String,
    mpesaReceiptNumber: String,
    paidAmount: String,
    merchantRequestID: String,
    checkoutRequestID: String
});

const paySchema = mongoose.model('mpesatransactions', mpesaTransactionsSchema);
export default paySchema;