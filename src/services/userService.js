const userRepository = require('../repositories/userRepository');

class UserService {
  async findAll() {
    return userRepository.findAll();
  }

  async findById(id) {
    return userRepository.findById(id);
  }

  async create(userData) {
    return userRepository.create(userData);
  }
}

module.exports = new UserService();
