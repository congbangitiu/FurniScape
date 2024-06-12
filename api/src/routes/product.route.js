const express = require(`express`);

const { addProduct,
        addProducts,
        getProducts,
        updateProduct,
        updateProductImage,
        searchByKeyword,
        searchByCategory,
} = require("../controllers/product.controller");

const {
        product_picture_upload,
} = require("../utils/multerConfig");

const { verifyToken, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/addProduct", verifyAdmin, addProduct);

router.post("/addProducts", verifyAdmin, addProducts);

router.get("/getProducts", getProducts);

router.get("/updateProduct", verifyAdmin, updateProduct);

router.put("/updateProductImage", 
            verifyAdmin, 
            product_picture_upload.single("file"), 
            updateProductImage);

router.get("/searchByKeyword/:keyword", searchByKeyword);

router.get("/searchByCategory/:category", searchByCategory);

module.exports = router;