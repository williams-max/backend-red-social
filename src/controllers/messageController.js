const messageService = require('../services/messageService');

class MessageController {
  async findAll(req, res) {
    const users = await messageService.findAll();
    res.json(users);
  }

  async findById(req, res) {
    const { id } = req.params;
    const user = await messageService.findById(id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  }

  async create(req, res) {
    const userData = req.body;
    const newUser = await messageService.create(userData);
    res.status(201).json(newUser);
  }
}

module.exports = new MessageController();
