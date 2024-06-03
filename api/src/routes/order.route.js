const express = require(`express`);

const { placeOrder, 

} = require("../controllers/order.controller");
const { verifyToken } = require("../utils/verifyToken");

const router = express.Router();

router.post("/placeOrder", verifyToken ,placeOrder);

module.exports = router;