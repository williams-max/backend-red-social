
const { Conversation } = require('../models'); 

class ConversationRepository {
  async findAll() {
    return Conversation.findAll();
  }

  async findById(id) {
    return Conversation.findByPk(id);
  }

  async create(ConversationData) {
    return Conversation.create(ConversationData);
  }
}

module.exports = new ConversationRepository();
