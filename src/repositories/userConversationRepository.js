
const { UserConversation, Conversation, Message } = require('../models'); 
const { Op } = require('sequelize');
class UserConversationRepository {
  async findAll(params) {
    const query = {
      where: {}
    };
    
    // Si se proporciona `userId`, comprueba si es un array o un valor único
    if (params?.userId) {
      if (Array.isArray(params?.userId)) {
          // Si `userId` es un array, usa `Op.in`
          query.where.userId = {
              [Op.in]: params?.userId
          };
      } else {
          // Si `userId` es un valor único, usa el valor directamente
          query.where.userId = params?.userId;
      }
    }
    return UserConversation.findAll({
      ... query, // Pasamos el objeto `query` construido dinámicamente
      include: [
        {
          model: Conversation,
          as: 'conversation', // Alias que usaste en la asociación
          require: true,
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
