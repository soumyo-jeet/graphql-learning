import mongoose from "mongoose";

const connectToDB = async () =>
    mongoose.connect("mongodb://localhost:27017/******")
        .then(() => console.log(`Connected`)).catch((e) => "Error in connectionn!")

export default connectToDB