const express = require(`express`);
const {updateUser, 
        getUser,
        getAllUser,
} = require("../controllers/user.controller");
const { verifyToken, verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();


router.get("/getuser", verifyToken, getUser);

router.get("/getalluser", verifyAdmin, getAllUser);

router.patch("/updateUser", verifyToken, updateUser);

module.exports = router;
