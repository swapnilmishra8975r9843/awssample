const express = require("express");
const { logic, logic2, logic3 } = require("../controlers/logic");
const { middlefunction } = require("../middleware/loger");
const router = express.Router();

router.get("/", logic);
router.get("/home", logic2);
router.get("/about", logic3);

module.exports = router;
