const Drug = require("../models/Drug.model");

module.exports.drugControllers = {
  createDrug: async (req, res) => {
    const newDrug = await Drug.create({
      name: req.body.name,
      recipe: req.body.recipe,
      drugCategorie: req.body.drugCategorie,
    });
    res.json(newDrug);
  },
  deleteDrug: async (req, res) => {
    const delDrug = await Drug.findByIdAndRemove(req.params.id);
    res.json("Лекарство удалёно");
  },
  updateDrug: async (req, res) => {
    const newDrug = await Drug.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      drugCategorie: req.body.drugCategorie
    });
    res.json(newDrug);
  },
  getAllDrugs: async (req, res) => {
    const allDrug = await Drug.find();
    res.json(allDrug);
  },
  getAllDrugsByCategorie: async (req, res) => {
    const allDrug = await Drug.findById({ categorie: req.params.id });
    res.json(allDrug);
  },
  getDrugById: async (req, res) => {
    const idDrug = await Drug.findById(req.params.id);
    res.json(idDrug);
  },
};
