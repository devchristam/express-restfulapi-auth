const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const accountRouter = require('./router/accountRouter')
const contentRouter = require('./router/contentRouter')

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(accountRouter)
app.use(contentRouter)

app.get('/', (req, res) => {
  res.send('welcome to the auth template')
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})