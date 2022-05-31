const { Router } = require("express");

const { userControllers } = require("../controllers/User.controllers");

const router = Router();

router.post("/user", userControllers.createUser);
router.delete("/user/:id", userControllers.deleteUser);
router.get("/user", userControllers.getUser);
router.patch("/user/:id", userControllers.updateUser);
router.patch("/user/money/:id", userControllers.takeMoney);
router.patch('/user/buy/:id', userControllers.buyDrugs)

module.exports = router;
