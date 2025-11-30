const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/fundlance')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message));
  const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);
const profileRoutes = require('./routes/profiles');
app.use('/profiles', profileRoutes);

app.get('/', (req, res) => {
  res.send('Fundlance API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));