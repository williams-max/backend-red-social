const express = require('express');
const userRoutes = require('./routes/userRoutes');
const userConversationRoutes = require('./routes/userConversationRoutes');


const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api',userConversationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
