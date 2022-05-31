const Categorie = require("../models/Categorie.model");

module.exports.categorieControllers = {
  createCategorie: async (req, res) => {
    const newDrug = await Categorie.create({ name: req.body.name });
    res.json(newDrug);
  },
  deleteCategorie: async (req, res) => {
    const delDrug = await Categorie.findByIdAndRemove(req.params.id);
    res.json("Категория удалена");
  },
  updateCategorie: async (req, res) => {
    const upCategorie = await Categorie.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });
    res.json(upCategorie);
  },
  getCategorie: async (req, res) => {
    const allCategories = await Categorie.find();
    res.json(allCategories);
  },
};
