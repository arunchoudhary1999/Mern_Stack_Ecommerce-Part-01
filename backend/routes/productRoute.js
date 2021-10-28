const express = require("express");

const { getAllProducts } = require("../controllers/productController");
// <<< * Here the function of all the products will be called * >>>

const router = express.Router();
// <<< * We make a route by using a router * >>>

router.route("/products").get(getAllProducts);
// <<< * We have used get method to view the produts * >>>

module.exports = router;