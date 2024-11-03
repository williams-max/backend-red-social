const express = require('express');
const cors = require('cors'); // Importa cors
const userRoutes = require('./routes/userRoutes');
const userConversationRoutes = require('./routes/userConversationRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const messageRoutes = require('./routes/messageRoutes');


const app = express();
app.use(cors()); // Configura cors
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api',userConversationRoutes);
app.use('/api',conversationRoutes);
app.use('/api',messageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
