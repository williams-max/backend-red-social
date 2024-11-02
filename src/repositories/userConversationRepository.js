
const { UserConversation, Conversation, Message } = require('../models'); 

class UserConversationRepository {
  async findAll() {
    console.log('llegueeeeeee ')
    return UserConversation.findAll({
      include: [
        {
          model: Conversation,
          as: 'conversation', // Alias que usaste en la asociación
          // attributes: ['id', 'name'] // Especifica qué atributos deseas incluir del modelo User
        },
        {
          model: Message,
          as: 'messages', // Alias que usaste en la asociación
          // attributes: ['id', 'name'] // Especifica qué atributos deseas incluir del modelo User
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
