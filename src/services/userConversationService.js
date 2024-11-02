const userConversationRepository = require('../repositories/userConversationRepository');

class UserConversationService {
  async findAll(params) {
    return userConversationRepository.findAll(params);
  }

  async findById(id) {
    return userConversationRepository.findById(id);
  }

  async create(userData) {
    return userConversationRepository.create(userData);
  }
}

module.exports = new UserConversationService();
