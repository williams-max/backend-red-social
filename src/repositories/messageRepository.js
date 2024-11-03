
const { Message, User } = require('../models'); 

class MessageRepository {
  async findAll(params) {
    const query = {};
    
    /* if (params.userId) {
      query.userId = params.userId;
    } */
    return Message.findAll({
      where: query, // Pasamos el objeto `query` construido dinámicamente
      include: [
        {
          model: User,
          as: 'userCreador', // Alias que usaste en la asociación
          // attributes: ['id', 'name'] //
        }
      ]
    });
  }

  async findById(id) {
    return Message.findByPk(id);
  }

  async create(MessageData) {
    return Message.create(MessageData);
  }
}

module.exports = new MessageRepository();
