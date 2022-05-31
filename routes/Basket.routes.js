const { Router } = require("express");

const { basketControllers } = require("../controllers/Basket.controllers");

const router = Router();

router.post("/user/basket", basketControllers.createBasket);
router.patch("/user/basket/:id", basketControllers.pushDrug);
router.patch("/user/basket/deleteDrug/:id", basketControllers.deleteDrug);
router.patch("/user/basket/clean/:id", basketControllers.cleanDrug);

module.exports = router;
