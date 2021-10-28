const express = require("express");
// <<< * First installed express package and import express here * >>>

const app = express();
// <<< * The express() function is a top-level function exported by the express module that is placed in an app variable * >>>

app.use(express.json());

// <<< * Route file imported here * >>>
const product = require("./routes/productRoute");

app.use("/api/vi", product);
// <<< * We will give the same thing that will be used again and again, along with that we will give the route of the product * >>>

module.exports = app;
// <<< * Exported the app.js file and imported it into the server.js file * >>>