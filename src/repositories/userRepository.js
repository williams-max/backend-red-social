// const { User } = require('../models');
// const User = require('../models/User');
const { User } = require('../models'); // Asegúrate de que la ruta sea correcta

class UserRepository {
  async findAll() {
    return User.findAll();
  }

  async findById(id) {
    return User.findByPk(id);
  }

  async create(userData) {
    return User.create(userData);
  }
}

module.exports = new UserRepository();
