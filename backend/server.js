// <<< * Imported the app.js file here * >>>
const app = require("./app");

// <<< * Here import the dotenv which installed to use the config.env file * >>>
const dotenv = require("dotenv");

// <<< * Imported the database.js file here * >>>
const connectDatabase = require("./config/database");

// <<< * Config * >>>
dotenv.config({ path: "backend/config/config.env" }); 
// <<< * Connected bt putting the path to the config.env file like this * >>>

// <<< * Have connected the database well to the server by calling the connectDatabase function here * >>>
connectDatabase();

// <<< * Now we will create a SERVER by doing app.listen in which PORT NUMBER and CALL BACK function will have to be given * >>>
app.listen(process.env.PORT, () => {

    console.log(`server is working on http://localhost:${process.env.PORT}`);

});
// <<< * This will create a separate file for the PORT NUMBER and put the PORT NUMBER inside it * >>>