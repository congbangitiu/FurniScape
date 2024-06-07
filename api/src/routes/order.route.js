const express = require(`express`);

const { placeOrder, 
        getAllOrders,
        getOrderFromUser
} = require("../controllers/order.controller");
const { verifyToken, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/placeOrder", verifyToken ,placeOrder);

router.get("/getOrder", verifyToken, getOrderFromUser);

router.get("/getAllOrders", verifyAdmin, getAllOrders);

module.exports = router;