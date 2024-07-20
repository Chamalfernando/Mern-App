const mongoose = require('mongoose');

const connectDB = () => {
    // mongoose
    //     .connect(process.env.MONGO_URI)
    //     .then((con) => {
    //         console.log(`MongoDB Connected: ${con.connection.host}`);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         process.exit(1);
    //     });
    try {
        const conn = mongoose.mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB