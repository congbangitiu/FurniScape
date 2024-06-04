const express = require(`express`);

const { addProduct,
    addProducts,
    getProducts,
    updateProduct,
} = require("../controllers/product.controller");
const { verifyToken, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/addProduct", verifyAdmin, addProduct);

router.post("/addProducts", verifyAdmin, addProducts);

router.get("/getProducts", getProducts);

router.get("/updateProduct", verifyAdmin, updateProduct)

module.exports = router;