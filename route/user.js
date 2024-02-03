const router = require("express").Router();
const User = require("../model/user");

router.get("/api/users", async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

router.post("/api/users", async (req, res) => {
  console.log(req.body);
  const userData = await User.create(req.body);
  res.status(200).json(userData);
});

router.get("/api/users/:id", async (req, res) => {
  console.log(req.params);
  const userData = await User.findOne({where: req.params});
  res.status(200).json(userData);
});

module.exports = router;
