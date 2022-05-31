const { Router } = require("express");

const {
  categorieControllers,
} = require("../controllers/Categorie.controllers");

const router = Router();

router.post("/admin/categorie", categorieControllers.createCategorie);
router.delete("/admin/categorie/:id", categorieControllers.deleteCategorie);
router.patch("/admin/categorie/:id", categorieControllers.updateCategorie);
router.get("/categorie", categorieControllers.getCategorie);

module.exports = router;
