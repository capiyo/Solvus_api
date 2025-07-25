import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;



// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// Import routes
import jobRoutes from "./routes/jobRoutes.js";
import caseRoutes from "./routes/caseRoutes.js"
//import workerRoutes from "./routes/workerRoutes"
import userRoutes from "./routes/userRoutes.js"
import  workerRoutes from './routes/workerRoutes.js'
import  paymentRoutes  from "./routes/paymentRoute.js"
import applicationRoutes from "./routes/applicationRoutes.js"
import recruiterRoutes from "./routes/recruiterRoutes.js"
import fileUploadRoute from './routes/fileUploadRoute.js'
import Auth from './routes/Auth.js'

// Use routes
app.use("/jobs", jobRoutes);
app.use("/users", userRoutes);
app.use("/application", applicationRoutes);
app.use("/case",caseRoutes)
app.use("/workerChats", workerRoutes )
app.use("/recruiter", recruiterRoutes);
app.use("/", fileUploadRoute);
app.use("/auth", Auth)
app.use("/payment", paymentRoutes)

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.redirect("/");
}
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
