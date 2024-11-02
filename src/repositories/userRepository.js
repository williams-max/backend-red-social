
const { User } = require('../models'); 

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
   // Método para encontrar un usuario por criterios específicos
   async findOne(conditions) {
    return User.findOne({ where: conditions });
  }
}

module.exports = new UserRepository();
