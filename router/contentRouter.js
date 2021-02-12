const express = require('express')
const router = new express.Router()
const contentController = require('../controller/contentController')
const tokenMiddleware = require('../middleware/tokenMiddleware')

const controller = new contentController()

router.get('/content', tokenMiddleware, controller.getcontent)

module.exports = router
