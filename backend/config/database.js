// <<< * From here we will connect to the database * >>>
const mongoose = require("mongoose");

// <<< * Will put this whole mongoose in a variable named connectDatabase * >>>
const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        }).catch((err) => {
            console.log(err);
        })
};

module.exports = connectDatabase;
// <<< * and we will import and call this function in server.js file * >>>

