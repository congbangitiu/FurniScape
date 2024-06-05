const express = require(`express`);

const { placeOrder, 
        //getAllOrders,
} = require("../controllers/order.controller");
const { verifyToken, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/placeOrder", verifyToken ,placeOrder);

//router.get("/getAllOrders", verifyAdmin, getAllOrders);

module.exports = router;