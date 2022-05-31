const Basket = require("../models/Basket.model");
const User = require("../models/User.model");

module.exports.userControllers = {
  createUser: async (req, res) => {
    const newUser = await User.create({
      name: req.body.name,
      money: req.body.money,
      recipe: req.body.recipe,
    });

    await Basket.create({
      user: newUser._id,
    });
    res.json(newUser);
  },
  deleteUser: async (req, res) => {
    const delUser = await User.findByIdAndRemove(req.params.id);
    res.json("Пользователь удалён");
  },
  getUser: async (req, res) => {
    const getUser = await User.find();
    res.json(getUser);
  },
  updateUser: async (req, res) => {
    const upUser = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      recipe: req.body.recipe,
    })
    res.json("Изменено")
  },
  buyDrugs: async (req, res) => {
    const basket = await Basket.findById(req.params.id);
    const user = await User.findById(basket.user);

    if (user.money > basket.total) {
    await User.findByIdAndUpdate(basket.user, {
      money: user.money - basket.total,
    })
    await Basket.findByIdAndUpdate(req.params.id, {
        drugs: [],
        total: 0
    });
    res.json("Товар куплен");
} else { res.json('Не хватает денег!')}
  },
  takeMoney: async (req, res) => {
    const user = await User.findById(req.params.id);
    const sum = user.money + req.body.money;
    const result = await User.findByIdAndUpdate(req.params.id, {
      money: sum,
    });
    res.json(`Кошелек пополнен на ${sum}`);
  },
};
