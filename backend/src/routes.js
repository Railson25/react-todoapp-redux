const { Router } = require('express');

const routes = new Router();

const User = require('./models/User');

routes.post('/users', async (req, res) => {
  const { email } = req.body;

  const mailExists = await User.find({ email });
  
  if(mailExists){
    return res.status(400).json({ error: 'User already exists' });
  }

  const user = await User.create(req.body);

  return res.json(user);
});

module.exports = routes;
