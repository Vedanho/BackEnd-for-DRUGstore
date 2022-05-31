const Basket = require("../models/Basket.model");
const Drug = require("../models/Drug.model");
const User = require("../models/User.model");

module.exports.basketControllers = {
  createBasket: async (req, res) => {
    await Basket.create({ user: req.body.user });
    res.json("Корзина создана");
  },
  pushDrug: async (req, res) => {
    try {
      const basket = await Basket.findById(req.params.id);
      const drug = await Drug.findById(req.body.drugs);
      const user = await User.findById(basket.user);

      if (drug.recipe === true) {
        if (user.recipe === true) {
          await Basket.findByIdAndUpdate(req.params.id, {
            $push: { drugs: req.body.drugs },
            total: basket.total + drug.price,
          });

          res.json("Лекарство добавлено");
        } else {
          res.json("Нету рецепта");
        }
      } else {
        await Basket.findByIdAndUpdate(req.params.id, {
          $push: { drugs: req.body.drugs },
          total: basket.total + drug.price,
        });

        res.json("Лекарство добавлено");
      }
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteDrug: async (req, res) => {
    await Basket.findByIdAndUpdate(req.params.id, {
      $pull: { drugs: req.body.drugs },
    });
    res.json("Лекарство удалено");
  },
  cleanDrug: async (req, res) => {
    await Basket.findByIdAndUpdate(req.params.id, {
      drugs: [],
      total: 0
    });
    res.json("Корзина очищена");
  },
};
