const express = require('express');
const auth = require('../middleware/auth');
const FounderProfile = require('../models/FounderProfile');
const InvestorProfile = require('../models/InvestorProfile');

const router = express.Router();

// Founder profile
router.post('/founder', auth, async (req, res) => {
  if (req.user.role !== 'founder') return res.status(403).json({ message: 'Forbidden' });
  const payload = { ...req.body, userId: req.user.id };
  try {
    const profile = await FounderProfile.findOneAndUpdate(
      { userId: req.user.id },
      payload,
      { upsert: true, new: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Investor profile
router.post('/investor', auth, async (req, res) => {
  if (req.user.role !== 'investor') return res.status(403).json({ message: 'Forbidden' });
  const payload = { ...req.body, userId: req.user.id };
  try {
    const profile = await InvestorProfile.findOneAndUpdate(
      { userId: req.user.id },
      payload,
      { upsert: true, new: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get my profile
router.get('/me', auth, async (req, res) => {
  try {
    const profile = req.user.role === 'founder'
      ? await FounderProfile.findOne({ userId: req.user.id })
      : await InvestorProfile.findOne({ userId: req.user.id });
    res.json(profile || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;