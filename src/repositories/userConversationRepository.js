
const { UserConversation, Conversation, Message } = require('../models'); 

class UserConversationRepository {
  async findAll(params) {
    console.log('llegueeeeeee ', params)
    return UserConversation.findAll({
      include: [
        {
          model: Conversation,
          as: 'conversation', // Alias que usaste en la asociación
          // attributes: ['id', 'name'] //
          include: [
            {
              model: Message,
              as: 'messages', // Alias que usaste en la asociación
              // attributes: ['id', 'name'] //
            }
          ]
        }
      ]
    });
  }

  async findById(id) {
    return UserConversation.findByPk(id);
  }

  async create(UserConversationData) {
    return UserConversation.create(UserConversationData);
  }
}

module.exports = new UserConversationRepository();
