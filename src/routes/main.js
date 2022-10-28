const router = require('express').Router()
const {index, music,about,contact,admin,login,noEntry} = require('../controllers/mainController')
const accesAdmin = require('../middlewares/accesAdmin')

router
  .get('/',index)
  .get('/music', music)
  .get('/about', about)
  .get('/contact', contact)
  .get('/admin',accesAdmin ,admin)
  .get('/login', login)
  .get('/noEntry', noEntry)

  
module.exports = router