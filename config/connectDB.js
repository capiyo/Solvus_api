import mongoose from "mongoose";
import dotenv from "dotenv";
const MONGODB_URL="mongodb+srv://EngCapiyo:Capiyo%401010@cluster1.kbtey0y.mongodb.net/Solvus?retryWrites=true&w=majority&appName=Cluster1"

dotenv.config();




const connectDB = () => {
  mongoose
    .connect(MONGODB_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((error) => {
      console.log("Error connecting database");
      console.error(error.message);
      process.exit(1);
    });
}
export default connectDB;