const mongoose = require('mongoose');

const InvestorProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  firmName: { type: String, required: true },
  preferredIndustries: [{ type: String, required: true }],
  preferredStages: [{ type: String, required: true }],
  minTicket: { type: Number, required: true },
  maxTicket: { type: Number, required: true },
  location: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('InvestorProfile', InvestorProfileSchema);