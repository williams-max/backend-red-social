const userService = require('../services/userService');

class UserController {
  async findAll(req, res) {
    const users = await userService.findAll();
    res.json(users);
  }

  async findById(req, res) {
    const { id } = req.params;
    const user = await userService.findById(id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  }

  async create(req, res) {
    const userData = req.body;
    const newUser = await userService.create(userData);
    res.status(201).json(newUser);
  }
}

module.exports = new UserController();
