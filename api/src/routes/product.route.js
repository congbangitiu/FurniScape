const express = require(`express`);

const { addProduct,
        addProducts,
        getProducts,
}  = require("../controllers/product.controller");
const { verifyToken, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/addProduct", verifyAdmin, addProduct);

router.post("/addProducts", verifyAdmin, addProducts);

router.get("/getProducts", verifyToken, getProducts);

module.exports = router;