const express = require(`express`);

const { addProduct,
        addProducts,
        getProducts,
        updateProduct,
        searchByKeyword,
        searchByCategory,
}  = require("../controllers/product.controller");
const { verifyToken, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/addProduct", verifyAdmin, addProduct);

router.post("/addProducts", verifyAdmin, addProducts);

router.get("/getProducts", getProducts);

router.get("/updateProduct", verifyAdmin, updateProduct);

router.get("/searchByKeyword/:keyword", searchByKeyword);

router.get("/searchByCategory/:category", searchByCategory);

module.exports = router;