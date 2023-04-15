// ES6 module syntax
import mongoose from "mongoose";

const connectDB = (url) => {
    // Enable the Mongoose library to throw errors when attempting to perform a query with invalid syntax
    // Enforce strict query mode, which prevents users from inadvertently executing unsafe or inefficient queries against the database
    mongoose.set('strictQuery', true);

    //then instead of async await
    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error));
}

export default connectDB;