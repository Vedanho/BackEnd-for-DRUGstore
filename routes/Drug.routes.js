const { Router } = require("express");

const { drugControllers } = require("../controllers/Drug.controlles");

const router = Router();

router.post("/admin/drug", drugControllers.createDrug);
router.delete("/admin/drug/:id", drugControllers.deleteDrug);
router.patch("/admin/drug/:id", drugControllers.updateDrug);
router.get("/drug", drugControllers.getAllDrugs);
router.get("/drug/categorie/:id", drugControllers.getAllDrugsByCategorie);
router.get("/drug/:id", drugControllers.getDrugById);

module.exports = router;
