
const express = require('express');
const { Router } = require('express');

const User = require('../models/user.model');
const userModel = require('../models/user.model');
console.log(User);
console.log(userModel);

const app = express();
app.use(cors({
  origin: 'http://127.0.0.1:8080', // Replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', '*');
  next();
})

// Create an instance of Express router
const router = Router();

app.post('/register', upload.single('video'), async (req, res) => {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      videoPath: req.file.path
    });
  
    try {
      await newUser.save();
      res.json({ success: true });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  console.log(module.paths);

  // export default router;
  module.exports = router;