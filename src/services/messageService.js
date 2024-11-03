const messageRepository = require('../repositories/messageRepository');

class MessageService {
  async findAll() {
    return messageRepository.findAll();
  }

  async findById(id) {
    return messageRepository.findById(id);
  }

  async create(userData) {
    return messageRepository.create(userData);
  }
}

module.exports = new MessageService();
