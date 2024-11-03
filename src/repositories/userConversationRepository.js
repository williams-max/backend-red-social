
const { UserConversation, Conversation, Message } = require('../models'); 

class UserConversationRepository {
  async findAll(params) {
    console.log('llegueeeeeee ', params)
    // Construimos el objeto `where` dinámicamente
    const query = {};
    
    if (params.userId) {
      query.userId = params.userId;
    }
    return UserConversation.findAll({
      where: query, // Pasamos el objeto `query` construido dinámicamente
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
