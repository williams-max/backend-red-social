
const { UserConversation } = require('../models'); 

class UserConversationRepository {
  async findAll() {
    console.log('llegueeeeeee ')
    return UserConversation.findAll();
  }

  async findById(id) {
    return UserConversation.findByPk(id);
  }

  async create(UserConversationData) {
    return UserConversation.create(UserConversationData);
  }
}

module.exports = new UserConversationRepository();
