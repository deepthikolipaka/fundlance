const mongoose = require('mongoose');

const FounderProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  startupName: { type: String, required: true },
  industry: { type: String, required: true },
  stage: { type: String, enum: ['idea', 'pre-seed', 'seed', 'seriesA', 'seriesB'], required: true },
  location: { type: String, required: true },
  traction: { type: String },
  team: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('FounderProfile', FounderProfileSchema);