const express = require('express')
const mongoose = require('mongoose')
const mongodb=require('mongodb')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const User = require('./src/models/userModel');
const Travel = require('./src/models/travelModels');
const Question = require('./src/models/questionModel')
const Category = require('./src/models/categoryModel')
const authRoutes = require('./src/controllers/authController');
const categoryRoutes = require("./src/controllers/categoryController");
const travelRoutes = require("./src/controllers/travelController");
const templatesController = require('./src/controllers/templatesController');
const path = require('path');

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client')));
mongoose.connect(process.env.DATABASE_ATLAS)
  .then(() => console.log('Baza je povezana!')).catch(err => console.log(err))

if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}

async function initializeDatabase() {
    try {
      
    
      console.log('Baza uspjesna');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  initializeDatabase();
  app.use("/api", authRoutes);
  app.use("/api", categoryRoutes);
  app.use("/api", travelRoutes);
  app.get('/login', templatesController.getLoginPage);
  app.get('/registration', templatesController.getRegisterPage);
  app.get('/index', templatesController.getIndexPage);


app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", travelRoutes);
app.get('/login', templatesController.getLoginPage);
app.get('/registration', templatesController.getRegisterPage);
app.get('/index', templatesController.getIndexPage);

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server slusa na portu ${port}`)
})
