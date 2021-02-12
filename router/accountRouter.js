const express = require('express')
const router = new express.Router()
const accountController = require('../controller/accountController')
const accountModel = require('../model/accountModel')

const controller = new accountController(accountModel)

// router.get('/account', controller.register)
router.put('/account', controller.register)
router.post('/account', controller.login)

module.exports = router
