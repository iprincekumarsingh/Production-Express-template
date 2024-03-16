import mongoose from "mongoose";

const handleConnectionError = (error) => {
  console.error("MongoDB connection error:", error);
};

const dbConn = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch(handleConnectionError);
};

export default dbConn;
