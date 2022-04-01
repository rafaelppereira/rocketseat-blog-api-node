const Posts = require('../models/Posts');

module.exports = {
  getPosts: async (req, res) => {
    const posts = await Posts.find();
    res.json({posts});
  }
};