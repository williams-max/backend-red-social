const userConversationRepository = require('../repositories/userConversationRepository');

class UserConversationService {
  async findAll() {
    return userConversationRepository.findAll();
  }

  async findById(id) {
    return userConversationRepository.findById(id);
  }

  async create(userData) {
    return userConversationRepository.create(userData);
  }
}

module.exports = new UserConversationService();
