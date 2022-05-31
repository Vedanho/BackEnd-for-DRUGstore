const { Router } = require("express");

const router = Router();

router.use(require("./Drug.routes"));
router.use(require("./Categorie.routes"));
router.use(require("./User.routes"));
router.use(require("./Basket.routes"));

module.exports = router;
