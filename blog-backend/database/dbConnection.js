import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected");
    }).catch(err => {
        console.log("some error ", err); // Log the error for better debugging
    });
};
