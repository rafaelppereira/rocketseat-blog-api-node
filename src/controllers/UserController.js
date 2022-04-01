const User = require('../models/User');

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find();
    res.json({users});
  },
};