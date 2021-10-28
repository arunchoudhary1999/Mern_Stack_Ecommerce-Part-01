// <<< * This is the product controller fule which will be controlled by the admin from here * >>>

// <<< * Here also a function named getAllProducts is created which is a callback function * >>>
exports.getAllProducts = (req, res) => {

    res.status(200).json({ message: "Route is working fine" });

};
// <<< * When the products are visible, we will start seeing a status code and message like this in the response * >>>