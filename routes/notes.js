const express = require('express')
const router = express.Router()
const moment = require('moment')

const messages = require('../public/javascripts/dates')

router.get('/', function (req, res, next) {
	res.render('newMessage', { title: 'Mini Message Board' })
})

router.post('/', (req, res, next) => {
	let { name, message } = req.body
	messages.unshift({
		text: message,
		user: name,
		added: moment()
			.startOf('hour' - 1)
			.fromNow(),
	})
	res.redirect('/')
})

module.exports = router
