var express = require('express')
var router = express.Router()
const messages = require('../public/javascripts/dates')

router.get('/', function (req, res, next) {
	res.render('index', { messages: messages, title: 'Mini Message Board' })
})

module.exports = router
